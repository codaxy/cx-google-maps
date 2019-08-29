## v2 Breaking Changes

- `GoogleMap` does not need `containerElement` and `mapElement` anymore
- `GoogleMap` does not need `defaultCenter` and defaultZoom` anymore
- `SearchBox` does not receive children, it renders its own `input` of type `text` 
- `StandaloneSearchBox` does not receive children, it is a special case of `TextField`
- `InfoBox` styling is not controlled by `class/mod`, but by `options.boxClass` prop

