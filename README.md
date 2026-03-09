# react-sodium-ui UI

A modern, accessible React component library built with Tailwind CSS and TypeScript. react-sodium-ui UI provides a collection of unstyled, composable components that are perfect for building beautiful, responsive user interfaces.

## Features

- 🎨 **Tailwind CSS Styled** - Built with Tailwind CSS for consistent, customizable styling
- 📱 **Responsive Design** - Mobile-first approach with responsive utilities
- 🌙 **Dark Mode Support** - All components support light and dark modes
- ♿ **Accessible** - WCAG compliant components with proper ARIA attributes
- 📖 **Storybook Integration** - Interactive component documentation and testing
- 🔒 **TypeScript** - Full TypeScript support with complete type definitions
- 📦 **Tree-Shakeable** - Optimized for minimal bundle size with ES modules
- ⚡ **Vite + Rollup** - Fast development experience and optimized production builds

## Installation

### Using npm

```bash
npm install react-sodium-ui-evan react react-dom
```


```

## Peer Dependencies

This library requires the following peer dependencies to be installed in your project:

- `react` >= 18.2.0
- `react-dom` >= 18.2.0
- `react-hook-form` >= 7.0.0
- `zod` >= 3.0.0
- `tailwindcss` >= 4.0.0

## Quick Start

### Basic Setup

1. Install Tailwind CSS v4 (required):

```bash
npm install -D tailwindcss @tailwindcss/vite
```

2. Configure your `vite.config.ts` (add the Tailwind plugin):

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

3. Configure your `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-sodium-ui-evan/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;
```

4. Import react-sodium-ui UI components in your React app:

```tsx
import { Button, Input, Form } from 'react-sodium-ui-evan';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text..." />
    </div>
  );
}
```

## Components

### Form Components

#### **Input**

A flexible input field component with optional label and error display.

**Props:**
- `label?` - Label text displayed above the input
- `error?` - Error message displayed below the input
- All standard HTML input attributes (type, placeholder, disabled, etc.)

**Example:**

```tsx
import { Input } from 'react-sodium-ui-evan';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email..."
  error="Email is required"
/>
```

#### **Form**

A form wrapper component with built-in validation using React Hook Form and Zod.

**Props:**
- `schema` - Zod validation schema
- `onSubmit` - Form submission handler
- `children` - Form fields

**Example:**

```tsx
import { Form, Input } from 'react-sodium-ui-evan';
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

#### **Button**

A versatile button component with multiple variants and sizes.

**Props:**
- `variant?` - `'primary'` | `'secondary'` | `'outline'` (default: `'primary'`)
- `size?` - `'small'` | `'medium'` | `'large'` (default: `'medium'`)
- `onClick?` - Click handler
- `children` - Button text or content

**Example:**

```tsx
import { Button } from 'react-sodium-ui-evan';

<Button variant="primary" size="large" onClick={() => console.log('Clicked!')}>
  Submit
</Button>
```

### Layout Components

#### **Card**

A flexible card component with composable sub-components.

**Sub-components:**
- `Card` - Container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

**Example:**

```tsx
import { Card, CardHeader, CardTitle, CardContent } from 'react-sodium-ui-evan';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

#### **Modal**

A customizable modal dialog component with composable sections.

**Sub-components:**
- `Modal` - Container
- `ModalTrigger` - Opens the modal
- `ModalContent` - Modal content wrapper
- `ModalHeader` - Header section
- `ModalTitle` - Title
- `ModalDescription` - Description
- `ModalBody` - Body content
- `ModalFooter` - Footer section
- `ModalClose` - Close button
- `useModal` - Hook to control modal programmatically

**Example:**

```tsx
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose } from 'react-sodium-ui-evan';

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

### Navigation Components

#### **Navbar**

A responsive navigation bar with customizable items.

**Sub-components:**
- `Navbar` - Container
- `NavbarItem` - Individual navigation item

**Example:**

```tsx
import { Navbar, NavbarItem } from 'react-sodium-ui';

<Navbar>
  <NavbarItem href="/">Home</NavbarItem>
  <NavbarItem href="/about">About</NavbarItem>
</Navbar>
```

#### **Dropdown**

A flexible dropdown menu component.

**Sub-components:**
- `Dropdown` - Container
- `DropdownTrigger` - Trigger element
- `DropdownMenu` - Menu container
- `DropdownItem` - Menu item
- `DropdownSeparator` - Visual separator
- `DropdownLabel` - Menu label

**Example:**

```tsx
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSeparator } from 'react-sodium-ui';

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

#### **HamburgerMenu**

Responsive hamburger menu for mobile navigation.

**Sub-components:**
- `HamburgerMenu` - Main component
- `MobileMenu` - Mobile menu content

**Props (HamburgerMenu):**
- `isOpen?` - Whether menu is open
- `onToggle?` - Toggle handler

**Example:**

```tsx
import { HamburgerMenu, MobileMenu } from 'react-sodium-ui';
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

### Data Display Components

#### **Avatar**

A profile picture component with fallback text.

**Sub-components:**
- `Avatar` - Single avatar
- `AvatarGroup` - Multiple avatars

**Props:**
- `src?` - Image source URL
- `alt?` - Alt text for image
- `fallback?` - Fallback text for initials
- `size?` - `'small'` | `'medium'` | `'large'` (default: `'medium'`)

**Example:**

```tsx
import { Avatar } from 'react-sodium-ui';

<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" fallback="John Doe" size="medium" />
```

#### **Progress**

Display progress, loading states, and skeletons.

**Sub-components:**
- `Progress` - Progress bar
- `Spinner` - Loading spinner
- `Skeleton` - Skeleton loader

**Props (Progress):**
- `value?` - Current value
- `max?` - Maximum value (default: 100)
- `variant?` - `'default'` | `'success'` | `'warning'` | `'error'`
- `size?` - `'small'` | `'medium'` | `'large'`
- `showValue?` - Show percentage text

**Example:**

```tsx
import { Progress, Spinner, Skeleton } from 'react-sodium-ui';

<Progress value={75} variant="success" showValue />
<Spinner size="medium" />
<Skeleton width="w-32" height="h-4" />
```

#### **Alert**

Informational alert box with composable sections.

**Sub-components:**
- `Alert` - Container
- `AlertTitle` - Title
- `AlertDescription` - Description

**Props (Alert):**
- `variant?` - `'default'` | `'success'` | `'warning'` | `'error'` | `'info'`

**Example:**

```tsx
import { Alert, AlertTitle, AlertDescription } from 'react-sodium-ui';

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved successfully.</AlertDescription>
</Alert>
```

#### **Toast**

Toast notification system.

**Components:**
- `Toast` - Individual toast
- `ToastProvider` - Provider wrapper
- `ToastContainer` - Toast container
- `useToast` - Hook to trigger toasts

**Example:**

```tsx
import { ToastProvider, ToastContainer, useToast } from 'react-sodium-ui';

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

#### **Slider**

Sidebar navigation component with slide-out panel.

**Sub-components:**
- `Slider` - Container
- `SliderLogo` - Logo/branding
- `SliderItem` - Menu item
- `SliderTrigger` - Trigger to open/close
- `SliderLink` - Navigation link
- `SliderButton` - Action button
- `SliderToggle` - Toggle button

**Example:**

```tsx
import { Slider, SliderLogo, SliderTrigger, SliderLink } from 'react-sodium-ui';

<Slider content={
  <nav>
    <SliderLink>Home</SliderLink>
    <SliderLink>About</SliderLink>
  </nav>
}>
  <SliderLogo>My App</SliderLogo>
  <SliderTrigger>Open Menu</SliderTrigger>
</Slider>
```

#### **ImageSlider**

Specialized image carousel component.

**Props:**
- `images` - Array of image objects with `src`, `alt?`, `caption?`
- `autoPlay?` - Auto-play slides
- `interval?` - Auto-play interval in ms
- `showDots?` - Show navigation dots
- `showArrows?` - Show navigation arrows

**Example:**

```tsx
import { ImageSlider } from 'react-sodium-ui';

const images = [
  { src: 'image1.jpg', alt: 'Image 1', caption: 'First image' },
  { src: 'image2.jpg', alt: 'Image 2', caption: 'Second image' },
];

<ImageSlider images={images} autoPlay showDots showArrows />
```

### Interactive Components

#### **Tooltip**

A tooltip component for helpful information display.

**Props:**
- `content` - Tooltip text
- `children` - Trigger element
- `position?` - `'top'` | `'bottom'` | `'left'` | `'right'` (default: `'top'`)
- `delay?` - Show delay in ms (default: 200)

**Example:**

```tsx
import { Tooltip } from 'react-sodium-ui';

<Tooltip content="This is a helpful tooltip" position="top" delay={300}>
  <button>Hover me</button>
</Tooltip>
```

## Development

### Build Setup

```bash
# Install dependencies
npm install

# Development server with Vite
npm run dev

# Build library
npm run build

# Preview production build
npm run preview

# Start Storybook (component documentation)
npm run storybook

# Build Storybook
npm run build-storybook
```

### Project Structure

```
src/
├── components/          # All component files
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
│   ├── Input.stories.tsx  # Storybook stories
│   └── index.ts           # Exports
├── index.css            # Global styles
└── index.ts             # Library entry point
```

## Build Output

The library is built as both ES modules and UMD format:

- **ES Module**: `dist/react-sodium-ui.js` - Modern JavaScript modules
- **UMD**: `dist/react-sodium-ui.umd.cjs` - Universal module for browsers and Node.js
- **Types**: `dist/index.d.ts` - TypeScript definitions

## Customization

### Theming

All components use Tailwind CSS classes and respect your Tailwind configuration. Customize colors, spacing, and other design tokens in your `tailwind.config.js`:

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

Dark mode is built into all components using Tailwind's `dark:` prefix. Enable it in your `tailwind.config.js`:

```js
export default {
  darkMode: 'class', // or 'media'
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, feature requests, or questions, please open an issue on GitHub.

---

**react-sodium-ui UI** - Built with ❤️ using React and Tailwind CSS
