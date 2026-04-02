from pathlib import Path

from bs4 import BeautifulSoup
import pytest


ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = [
    ROOT / "index.html",
    ROOT / "contact.html",
    ROOT / "construction.html",
]


def _read_soup(html_path: Path) -> BeautifulSoup:
    content = html_path.read_text(encoding="utf-8")
    return BeautifulSoup(content, "html.parser")


def _is_external_or_ignored(url: str) -> bool:
    prefixes = (
        "#",
        "mailto:",
        "tel:",
        "javascript:",
        "data:",
        "//",
        "/",
    )
    return url.startswith(prefixes) or "://" in url


def _iter_local_targets(soup: BeautifulSoup, html_path: Path):
    selectors = (("a", "href"), ("img", "src"), ("script", "src"), ("link", "href"))

    for tag, attr in selectors:
        for node in soup.find_all(tag):
            raw = node.get(attr)
            if not raw:
                continue

            url = raw.strip()
            if not url or _is_external_or_ignored(url):
                continue

            normalized = url.split("#", 1)[0].split("?", 1)[0]
            if not normalized:
                continue

            yield raw, (html_path.parent / normalized).resolve()


@pytest.mark.parametrize("html_path", HTML_FILES)
def test_html_files_exist(html_path: Path):
    assert html_path.exists(), f"Missing HTML file: {html_path}"


@pytest.mark.parametrize("html_path", HTML_FILES)
def test_html_has_title(html_path: Path):
    soup = _read_soup(html_path)
    assert soup.title is not None and soup.title.get_text(strip=True), (
        f"Missing or empty <title> in {html_path.name}"
    )


@pytest.mark.parametrize("html_path", HTML_FILES)
def test_local_links_and_assets_resolve(html_path: Path):
    soup = _read_soup(html_path)

    missing = []
    for raw, target in _iter_local_targets(soup, html_path):
        if not target.exists():
            missing.append((raw, target))

    assert not missing, "\n".join(
        [f"{html_path.name}: '{raw}' -> '{target}' does not exist" for raw, target in missing]
    )
