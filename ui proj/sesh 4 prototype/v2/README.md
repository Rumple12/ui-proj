# Omnisound - Iteration 2

Omnisound is a high-fidelity, desktop-first HCI prototype for exploring music, podcasts, and audiobooks in one clearly organised audio interface. It is intentionally a front-end-only prototype: there is no account system, backend, streaming integration, or payment flow.

## Five prototype screens

1. **Home** - a personalised overview with Continue Listening and separate Music, Podcast, and Audiobook sections.
2. **Search** - a prominent search field, live sample results, and content-type filters.
3. **Library** - saved items with All, Music, Podcasts, Audiobooks, and Playlists filters.
4. **Content detail** - reusable information, progress, play/resume, save feedback, and track/episode/chapter lists.
5. **Full player** - focused artwork, progress, transport, volume, save, queue, and spoken-audio speed controls.

## Testable user flows

### Flow 1: search and save

Home → Search → enter **Weezer** → open Weezer → Save → Library → see Weezer in the saved collection.

### Flow 2: resume unfinished audio

Home → Continue Listening → choose an unfinished podcast or audiobook → Resume → the full player opens at the displayed partial progress.

## HCI principles

- **Visibility:** persistent navigation, labelled content types, prominent search, and visible progress.
- **Feedback:** active navigation and filters, Save/Saved states, toast confirmations, and play/pause state changes.
- **Consistency:** shared cards, buttons, icons, navigation behaviour, and player controls across screens.
- **Affordance:** clear hover, focus, pressed, active, and pointer states for interactive elements.
- **Constraints:** only the controls needed for the two usability-test flows are included; out-of-scope profile and settings actions explain their prototype boundary.
- **Recognition over recall:** the three audio types and all main destinations stay visible in the sidebar.

## Iteration 2 redesign

This iteration responds to usability findings supplied by the project team. It retains the established Omnisound interface and makes three targeted refinements:

1. **Continue Listening is more prominent.** Its clearer heading and closer position to the top improve visibility and help users return to unfinished content more efficiently.
2. **The Home hero is shorter.** Reducing its height allows useful content to appear sooner while preserving the original introduction and visual identity.
3. **Save and Saved are clearer.** The unsaved control now uses an outlined heart with a stronger secondary-action treatment, while the saved state uses a filled heart and lime confirmation. This improves affordance and reinforces feedback without competing with Play or Resume.

These changes are redesign hypotheses for the second prototype iteration. Their effectiveness has not yet been evaluated.

## Launch locally

Open `index.html` in any modern browser. No installation or local server is required.

The interface is optimised for a desktop viewport around 1440 × 900 and includes responsive layouts for narrower screens.
