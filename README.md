# pulser-ui

A modern, accessible React component library built with Tailwind CSS and TypeScript. pulser-ui provides a curated collection of composable, fully-typed components designed for building beautiful, responsive user interfaces — fast.

---

## ✨ Features

- 🎨 **Tailwind CSS Styled** — Built on Tailwind CSS for consistent, highly customizable styling
- 📱 **Responsive by Default** — Mobile-first design with responsive utilities baked in
- 🌙 **Dark Mode Support** — Every component supports both light and dark modes out of the box
- ♿ **Accessible** — WCAG-compliant components with proper ARIA attributes throughout
- 📖 **Storybook Integration** — Interactive component documentation and visual testing
- 🔒 **TypeScript First** — Complete type definitions for every component and prop
- 📦 **Tree-Shakeable** — Optimized for minimal bundle size using ES modules
- ⚡ **Vite + Rollup** — Fast development experience and optimized production builds

---

## 📦 Installation

```bash
npm i pulser-ui
```

### Peer Dependencies

Ensure the following are installed in your project:

| Package | Version |
|---|---|
| `react` | >= 18.2.0 |
| `react-dom` | >= 18.2.0 |
| `react-hook-form` | >= 7.0.0 |
| `zod` | >= 3.0.0 |
| `tailwindcss` | >= 4.0.0 |

---

## 🚀 Quick Start

**1. Install Tailwind CSS v4:**

```bash
npm install -D tailwindcss @tailwindcss/vite
```

**2. Add the Tailwind plugin to your `vite.config.ts`:**

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    // ... other plugins
  ],
})
```

**3. Import and use components:**

```tsx
import { Button, Input, Form } from 'pulser-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text..." />
    </div>
  );
}
```

---

## 🧩 Components

### Form Components

#### `Input`

A flexible input field with optional label and inline error display.

| Prop | Type | Description |
|---|---|---|
| `label` | `string` | Label text displayed above the input |
| `error` | `string` | Error message displayed below the input |
| `...rest` | `HTMLInputAttributes` | All standard HTML input attributes |

```tsx
import { Input } from 'pulser-ui';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email..."
  error="Email is required"
/>
```

---

#### `Form`

A form wrapper with built-in validation powered by React Hook Form and Zod.

| Prop | Type | Description |
|---|---|---|
| `schema` | `ZodSchema` | Zod validation schema |
| `onSubmit` | `(data) => void` | Submission handler receiving validated data |
| `children` | `ReactNode` | Form fields |

```tsx
import { Form, Input } from 'pulser-ui';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function MyForm() {
  const onSubmit = (data) => console.log(data);

  return (
    <Form schema={schema} onSubmit={onSubmit}>
      <Input name="email" label="Email" />
      <Input name="password" label="Password" type="password" />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

---

#### `Button`

A versatile button with multiple variants and sizes.

| Prop | Type | Default |
|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` |
| `onClick` | `() => void` | — |
| `children` | `ReactNode` | — |

```tsx
import { Button } from 'pulser-ui';

<Button variant="primary" size="large" onClick={() => console.log('Clicked!')}>
  Submit
</Button>
```

---

### Layout Components

#### `Card`

A flexible card container with composable sub-components.

| Sub-component | Description |
|---|---|
| `Card` | Root container |
| `CardHeader` | Header section |
| `CardTitle` | Title text |
| `CardDescription` | Supporting description text |
| `CardContent` | Main content area |
| `CardFooter` | Footer section |

```tsx
import { Card, CardHeader, CardTitle, CardContent } from 'pulser-ui';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

---

#### `Modal`

A customizable modal dialog with composable sections and programmatic control.

| Sub-component | Description |
|---|---|
| `Modal` | Root container |
| `ModalTrigger` | Element that opens the modal |
| `ModalContent` | Modal content wrapper |
| `ModalHeader` | Header section |
| `ModalTitle` | Title |
| `ModalDescription` | Description |
| `ModalBody` | Body content |
| `ModalFooter` | Footer section |
| `ModalClose` | Close button |
| `useModal` | Hook for programmatic control |

```tsx
import {
  Modal, ModalTrigger, ModalContent,
  ModalHeader, ModalTitle, ModalBody,
  ModalFooter, ModalClose
} from 'pulser-ui';

<Modal>
  <ModalTrigger>Open Modal</ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Modal Title</ModalTitle>
    </ModalHeader>
    <ModalBody>Content here</ModalBody>
    <ModalFooter>
      <ModalClose>Close</ModalClose>
    </ModalFooter>
  </ModalContent>
</Modal>
```

---

### Navigation Components

#### `Navbar`

A responsive navigation bar with customizable items.

```tsx
import { Navbar, NavbarItem } from 'pulser-ui';

<Navbar>
  <NavbarItem href="/">Home</NavbarItem>
  <NavbarItem href="/about">About</NavbarItem>
</Navbar>
```

---

#### `Dropdown`

A flexible dropdown menu with full keyboard and accessibility support.

| Sub-component | Description |
|---|---|
| `Dropdown` | Root container |
| `DropdownTrigger` | Trigger element |
| `DropdownMenu` | Menu container |
| `DropdownItem` | Individual menu item |
| `DropdownSeparator` | Visual divider |
| `DropdownLabel` | Non-interactive label |

```tsx
import {
  Dropdown, DropdownTrigger, DropdownMenu,
  DropdownItem, DropdownSeparator
} from 'pulser-ui';

<Dropdown>
  <DropdownTrigger>
    <button>Open Menu</button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem onClick={() => console.log('Profile')}>Profile</DropdownItem>
    <DropdownItem onClick={() => console.log('Settings')}>Settings</DropdownItem>
    <DropdownSeparator />
    <DropdownItem onClick={() => console.log('Logout')}>Logout</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

---

#### `HamburgerMenu`

A responsive hamburger menu for mobile navigation.

| Prop | Type | Description |
|---|---|---|
| `isOpen` | `boolean` | Whether the menu is currently open |
| `onToggle` | `() => void` | Toggle handler |

```tsx
import { HamburgerMenu, MobileMenu } from 'pulser-ui';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HamburgerMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <MobileMenu isOpen={isOpen}>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </MobileMenu>
    </>
  );
}
```

---

### Data Display Components

#### `Avatar`

A profile picture component with graceful fallback to initials.

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | Image source URL |
| `alt` | `string` | — | Alt text for the image |
| `fallback` | `string` | — | Text to display when no image is available |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Avatar size |

```tsx
import { Avatar } from 'pulser-ui';

<Avatar
  src="https://example.com/avatar.jpg"
  alt="User Avatar"
  fallback="John Doe"
  size="medium"
/>
```

You can also group multiple avatars using `AvatarGroup`.

---

#### `Progress`

Display progress states, loading spinners, and content skeletons.

| Sub-component | Description |
|---|---|
| `Progress` | Progress bar |
| `Spinner` | Loading spinner |
| `Skeleton` | Skeleton loader for content placeholders |

**`Progress` Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | Current progress value |
| `max` | `number` | `100` | Maximum value |
| `variant` | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | Visual style |
| `size` | `'small' \| 'medium' \| 'large'` | — | Size |
| `showValue` | `boolean` | — | Show percentage label |

```tsx
import { Progress, Spinner, Skeleton } from 'pulser-ui';

<Progress value={75} variant="success" showValue />
<Spinner size="medium" />
<Skeleton width="w-32" height="h-4" />
```

---

#### `Alert`

An informational alert box with composable sections.

| Prop | Type | Description |
|---|---|---|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | Alert style |

```tsx
import { Alert, AlertTitle, AlertDescription } from 'pulser-ui';

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved successfully.</AlertDescription>
</Alert>
```

---

#### `Toast`

A toast notification system with a provider pattern and hook-based API.

```tsx
import { ToastProvider, ToastContainer, useToast } from 'pulser-ui';

function App() {
  return (
    <ToastProvider>
      <MyComponent />
      <ToastContainer />
    </ToastProvider>
  );
}

function MyComponent() {
  const { addToast } = useToast();

  return (
    <button onClick={() => addToast('Hello World!', 'success')}>
      Show Toast
    </button>
  );
}
```

---

#### `Slider`

A sidebar navigation component with a slide-out panel.

| Sub-component | Description |
|---|---|
| `Slider` | Root container |
| `SliderLogo` | Logo or branding area |
| `SliderItem` | Individual menu item |
| `SliderTrigger` | Trigger to open/close the slider |
| `SliderLink` | Navigation link |
| `SliderButton` | Action button |
| `SliderToggle` | Toggle button |

```tsx
import { Slider, SliderLogo, SliderTrigger, SliderLink } from 'pulser-ui';

<Slider
  content={
    <nav>
      <SliderLink>Home</SliderLink>
      <SliderLink>About</SliderLink>
    </nav>
  }
>
  <SliderLogo>My App</SliderLogo>
  <SliderTrigger>Open Menu</SliderTrigger>
</Slider>
```

---

#### `ImageSlider`

A specialized image carousel component.

| Prop | Type | Description |
|---|---|---|
| `images` | `{ src: string; alt?: string; caption?: string }[]` | Array of image objects |
| `autoPlay` | `boolean` | Auto-advance slides |
| `interval` | `number` | Auto-play interval in ms |
| `showDots` | `boolean` | Show navigation dots |
| `showArrows` | `boolean` | Show previous/next arrows |

```tsx
import { ImageSlider } from 'pulser-ui';

const images = [
  { src: 'image1.jpg', alt: 'Image 1', caption: 'First image' },
  { src: 'image2.jpg', alt: 'Image 2', caption: 'Second image' },
];

<ImageSlider images={images} autoPlay showDots showArrows />
```

---

### Interactive Components

#### `Tooltip`

A tooltip for surfacing helpful contextual information on hover.

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `string` | — | Tooltip text |
| `children` | `ReactNode` | — | Trigger element |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip placement |
| `delay` | `number` | `200` | Show delay in ms |

```tsx
import { Tooltip } from 'pulser-ui';

<Tooltip content="This is a helpful tooltip" position="top" delay={300}>
  <button>Hover me</button>
</Tooltip>
```

---

## 🛠 Development

```bash
# Install dependencies
npm install

# Development server with Vite
npm run dev

# Build library
npm run build

# Preview production build
npm run preview

# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

### Project Structure

```
src/
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── Form.tsx
│   ├── Navbar.tsx
│   ├── Avatar.tsx
│   ├── Alert.tsx
│   ├── Toast.tsx
│   ├── Progress.tsx
│   ├── Slider.tsx
│   ├── ImageSlider.tsx
│   ├── Dropdown.tsx
│   ├── HamburgerMenu.tsx
│   ├── Tooltip.tsx
│   ├── Input.stories.tsx
│   └── index.ts
├── index.css
└── index.ts
```

### Build Output

| File | Format | Description |
|---|---|---|
| `dist/pulser-ui.js` | ES Module | Modern JavaScript modules |
| `dist/pulser-ui.umd.cjs` | UMD | Universal module for browsers and Node.js |
| `dist/index.d.ts` | TypeScript | Complete type definitions |

---

## 🎨 Customization

### Theming

All components use standard Tailwind CSS classes and respect your project's Tailwind configuration. Extend your design tokens in `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
        secondary: '#666',
      },
    },
  },
}
```

### Dark Mode

Dark mode is supported by all components via Tailwind's `dark:` prefix. Enable it in your config:

```js
export default {
  darkMode: 'class', // or 'media'
}
```

---

## 🌐 Browser Support

Chrome, Firefox, Safari, and Edge — all latest versions.

---

## 📄 License

MIT

---

## 🤝 Contributing

Contributions are welcome! Please feel free to open a Pull Request or file an issue on GitHub.

---

---

## 🌐 Live Demo

Experience **Pulser UI** in action.

🔗 **Live Website:** https://pulser-ui-one.vercel.app

Pulser UI is a modern React component library designed to help developers build beautiful interfaces faster. It provides reusable, clean, and well-structured components built with modern frontend practices.

### ✨ What you can explore

- 🎨 Modern UI components
- ⚡ Fast and lightweight design
- 📱 Responsive layouts
- 🧩 Reusable component architecture
- 🛠️ Real-world component examples

Visit the demo site to preview components, explore the design system, and see how **Pulser UI** can accelerate your development workflow.
---

Built with ❤️ using React
