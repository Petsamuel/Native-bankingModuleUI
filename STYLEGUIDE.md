# Union Bank — Project Style Guide

## Colors

- Primary (Vibrant Blue): #009FDF
- Bermuda (Light Blue): #7ECED5
- Black: #000000

## Usage recommendations

- Use `#009FDF` for primary actions, buttons, and brand highlights.
- Use `#7ECED5` for secondary accents, subtle backgrounds and hover/pressed states.
- Use `#000000` for body text, icons, and where high contrast is required.

## Tailwind / NativeWind tokens

- `bg-primary`, `text-primary`, `border-primary`
- `bg-bermuda`, `text-bermuda`, `border-bermuda`
- `text-brand-black`, `bg-brand-black`

## React Native (NativeWind) examples

Primary button:

```jsx
<View className="bg-primary rounded-lg px-4 py-3">
  <Text className="text-white text-center font-bold">Continue</Text>
</View>
```

Secondary accent:

```jsx
<View className="bg-bermuda p-3 rounded">
  <Text className="text-brand-black">Info</Text>
</View>
```

## Notes

- Colors are defined in `tailwind.config.js` so component classes like `bg-primary` will work across the app.
- If you need additional shades, add them to `theme.extend.colors` in `tailwind.config.js` and document them here.
