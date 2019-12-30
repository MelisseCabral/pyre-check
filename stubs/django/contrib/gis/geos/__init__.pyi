# pyre-unsafe

from typing import Optional

class GEOSBase:
    pass

class ListMixin:
    pass

class GEOSGeometry(GEOSBase, ListMixin):
    @property
    def empty(self) -> bool: ...
    def __init__(self, geo_input, srid=...): ...

class Point(GEOSGeometry):
    def __init__(self, x, y=..., z=..., srid=...) -> None: ...
    @property
    def x(self) -> int: ...
    @property
    def y(self) -> int: ...
    @property
    def z(self) -> Optional[int]: ...

class Polygon(GEOSGeometry):
    pass
