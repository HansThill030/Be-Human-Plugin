# Icons & Micro-Interactions (Phosphor + Lottie)

## Why No `lucide-react`?
AI reaches for `lucide-react` 99% of the time. Its uniform 2px stroke geometry has become the #1 visual fingerprint of an AI-generated template.

## Default Icon System: Phosphor Icons
Use **Phosphor Icons** for softer, more intentional optical weight and personality:
- **React / Next.js**: `npm install @phosphor-icons/react`
- **Vue**: `npm install @phosphor-icons/vue`
- **Vanilla / HTML**: `@phosphor-icons/web` or inline Phosphor SVGs

### Weight Strategy (Mix Deliberately)
- `weight="regular"` — Default navigation, toolbar, and list icons.
- `weight="duotone"` — Feature highlights, empty states, active nav items, and status callouts.
- `weight="bold"` — Small 14–16px inline badges, buttons, and high-contrast actions.
- `weight="fill"` — Active toggles, selected tabs, bookmarks, and ratings.

### Quick Migration Map (Lucide → Phosphor)
| Lucide Icon | Phosphor Equivalent |
|---|---|
| `ChevronRight` / `ChevronDown` | `CaretRight` / `CaretDown` |
| `Settings` | `Gear` |
| `Loader2` | `SpinnerGap` |
| `Search` | `MagnifyingGlass` |
| `Trash2` | `Trash` |
| `CheckCircle2` / `AlertCircle` | `CheckCircle` / `WarningCircle` |
| `Menu` | `List` |
| `Edit` / `Pencil` | `PencilSimple` |
| `ExternalLink` | `ArrowSquareOut` |
| `Sparkles` (decorative AI cliché) | **Remove**, or use a real domain icon |

1. Search for `from 'lucide-react'` or `from "lucide-react"`.
2. Replace with `@phosphor-icons/react` and remove `lucide-react` from `package.json`.

## Living Micro-Interactions: Lottie
Static UIs feel dead; CSS spin/pulse-everywhere feels cheap. Use **Lottie** (`@lottiefiles/dotlottie-react` or `lottie-react`) for moments that reward attention:
- **Best moments**: Empty states, success/upload confirmations, onboarding steps, interactive state toggles.
- **Reduced-Motion Wrapper**:
```tsx
import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function ReducedMotionLottie({ src, className }: { src: string; className?: string }) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  return <DotLottieReact src={src} loop={!reduced} autoplay={!reduced} className={className} />;
}
```
- Never loop distracting animations next to body text the user is trying to read.
