"""Package only Shopify theme directories as a real ZIP archive."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
output = root / "gm-sarwari-theme.zip"
with ZipFile(output, "w", ZIP_DEFLATED) as archive:
    for directory in ("assets", "blocks", "config", "layout", "locales", "sections", "snippets", "templates"):
        for file in sorted((root / directory).rglob("*")):
            relative = file.relative_to(root)
            if file.is_file() and not file.is_symlink() and not any(part.startswith(".") for part in relative.parts):
                archive.write(file, relative.as_posix())
print(output.name)
