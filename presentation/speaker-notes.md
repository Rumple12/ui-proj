# Omnisound presentation speaker notes

**Group 1 · DT168G / IU127G · 19 October 2026**

**Target: 17 minutes, followed by questions.** The times include short pauses to point at the sketches, screenshots and chart. Rehearse at a relaxed pace and use the checkpoints below.

| Slides | Presenter | Time | Cumulative finish |
| --- | --- | --- | --- |
| 1–3 | Obid Alrhman Aljabi | 4:30 | 4:30 |
| 4–6 | Yacoub Dawli | 6:00 | 10:30 |
| 7–9 | Sarshar Chavoshi Rad | 6:30 | 17:00 |

## Slide 1 — Title

**Presenter:** Obid Alrhman Aljabi  
**Target time:** 0:30  
**Finish by:** 0:30

Good morning. We are Group 1: Obid Alrhman Aljabi, Yacoub Dawli and Sarshar Chavoshi Rad. Our project is Omnisound, a shared interface for music, podcasts and audiobooks. We will show our early sketches, the first prototype, what happened in our usability tests, and how those observations helped us develop a second version.

## Slide 2 — The Idea

**Presenter:** Obid Alrhman Aljabi  
**Target time:** 1:30  
**Finish by:** 2:00

The idea behind Omnisound is to bring music, podcasts and audiobooks into one interface. We focused on students who use audio applications and want a clear way to find something, save it and return to it later.

Combining the content does not mean putting everything into one long list. We wanted each audio type to remain easy to recognise. The interface therefore has separate categories, but the main navigation and controls work in a similar way across them.

There are three important destinations here. Search helps people find content across the sample catalogue. Library brings saved items together. Continue Listening gives people a route back to unfinished podcasts or audiobooks, with progress information to help them recognise where they stopped.

For example, someone could save music for later and then return to an unfinished book without changing applications. That is the kind of interaction we wanted to explore.

Our work is an HCI interface prototype. We built connected screens and working interface actions, but we did not build a complete commercial streaming service. The tests examine how people use the interface, rather than audio delivery or subscriptions.

## Slide 3 — Early Designs

**Presenter:** Obid Alrhman Aljabi  
**Target time:** 2:30  
**Finish by:** 4:30

These are our three original pencil sketches. Before building detailed screens, we used them to discuss where navigation, content and playback controls could go.

[Point to the large sketch on the left.]

The first sketch puts navigation on the left and content on the right. You can see ideas for audio categories, playlists and Library, together with rough playback controls. At this stage we were exploring possibilities. For example, a store appears in the drawing, but we did not include that in the tested prototype.

[Point to the upper-right sketch.]

The second sketch focuses on browsing. Music, podcasts and books have separate rows with cover cards. This gave us a way to discuss how the content types could stay visible inside the same application.

[Point to the lower-right sketch.]

The third sketch explores the player, using Weezer as the example. It places the artwork and play control in the centre, with other playback and volume controls nearby. This helped us think about playback as part of the same interface.

We also considered separate categories compared with a mixed feed using filters, and cards compared with lists. The drawings did not test every alternative. They gave us something concrete to discuss before choosing what to build.

In the interactive design, we combined some of these ideas. Home uses category sections and cards. Search uses a list of results, while Library brings saved content together with filters. Starting on paper made it easier to consider the overall organisation before spending time on visual detail.

**Handoff:** Yacoub will now show how these ideas became the first interactive prototype and how we tested it.

## Slide 4 — V1 Prototype

**Presenter:** Yacoub Dawli  
**Target time:** 2:00  
**Finish by:** 6:30

These screenshots show the first version of Omnisound. The large image is Home. Search and Library are on the right. We also built content detail screens and a player so that people could complete tasks across several screens.

[Point to Home and its sidebar, then to Search and Library.]

The first key workflow was finding and saving content. A user could search for Weezer, open the result and select Save beside Play. The interface changed the label to Saved and briefly confirmed that the item was saved to Library. Opening Library then showed Weezer in the saved collection.

That final check was important. We wanted to see whether users understood where saved material went, rather than only whether they could press a button.

The second workflow was returning to an unfinished audiobook. Home included Continue Listening, with titles and progress information. Opening The Left Hand of Darkness showed the existing progress and a Resume control. Resume opened the player at that displayed position.

Users could also reach the audiobook through its category or Library. We kept these routes available because people may look for the same content in different places. During testing, their route choices became just as useful to us as whether they finished the task.

## Slide 5 — How We Tested

**Presenter:** Yacoub Dawli  
**Target time:** 2:00  
**Finish by:** 8:30

We conducted two usability-testing rounds, with three students in each round. The first group tested V1. After the redesign, three different students tested V2. Each person completed the same three core tasks in a browser on a laptop.

The first task was to find and save Weezer, then check that it appeared in Library. The second was to find an unfinished audiobook and continue from its existing position. The third was to find where to browse podcasts.

We described the goal rather than telling participants which button or route to use. For example, we did not tell them to select Continue Listening in the audiobook task. This let us see where they naturally looked.

We asked participants to think aloud, explaining what they were looking for and anything they found unclear. I moderated the tests. Obid recorded behaviour and comments, while Sarshar recorded task times and navigation steps.

We looked at completion, time and routes together. A completed task could still include hesitation or an unnecessary detour. Comments helped explain what happened.

Using different people in the second round avoided asking participants to repeat routes they already knew. It also means that differences between the two groups could affect the results. We will keep that limitation in mind when comparing the versions.

## Slide 6 — First Test Findings

**Presenter:** Yacoub Dawli  
**Target time:** 2:00  
**Finish by:** 10:30

All nine task attempts in V1 were completed without direct help. So the first version already supported the main activities. However, the way participants reached their goals showed us where the design needed attention.

[Point to the large banner and the unfinished content below it.]

Only one of the three participants used Continue Listening directly. The other two still resumed the audiobook, but one went through Audiobooks and the other through Library. Both later said they had not noticed Continue Listening.

This screenshot helps explain the issue we wanted to investigate. The introduction takes up a large part of the Home screen. Continue Listening appears below it as a small label above another heading, Back in progress. One participant also commented that the banner took a lot of space.

We recorded a brief hesitation around Save for one participant. Play attracted attention first, and the participant paused before finding Save beside it. The saving task still succeeded, including the check in Library.

Our lesson from the first round was that task completion alone did not tell the whole story. People could finish through other routes while missing a shortcut we expected them to notice. These observations gave us specific areas to change, while keeping the navigation that already worked.

**Handoff:** Sarshar will show the changes in V2 and what we observed in the second test.

## Slide 7 — What We Changed in V2

**Presenter:** Sarshar Chavoshi Rad  
**Target time:** 2:30  
**Finish by:** 13:00

Here we compare the same area of Home in V1 and V2. The screenshots use matching crops and the same scale, so you can compare the banner and unfinished content directly.

[Point first to the V1 banner, then to the V2 banner.]

The first change was to reduce the height of the introduction. We kept a short welcome message, but it no longer takes as much space above unfinished content. This brings the cards higher on the page.

[Point to the Continue Listening headings in both versions.]

The second change was the heading. V1 had the small Continue Listening label followed by Back in progress. In V2, we used one clearer Continue Listening heading with a lime marker. The aim was to make the route back to unfinished audio easier to notice.

We also changed the Save and Saved control on the detail page. Before saving, it uses an outlined heart and the word Save. After saving, it shows a filled heart, lime styling and Saved. We kept the confirmation message naming Library, so the interface gives both an immediate response and a visible state afterwards.

We kept the main navigation, audio categories and Library structure. The first test showed that people could use these routes, so we concentrated on the areas where they had paused or looked elsewhere.

These changes connect to visibility and feedback from our theory chapter. The Home changes make an important route more noticeable. The saving states help explain what happened after an action. We then tested V2 with the same task goals to see what happened during use.

## Slide 8 — Second Test Results

**Presenter:** Sarshar Chavoshi Rad  
**Target time:** 2:30  
**Finish by:** 15:30

This is the original task-time chart from our report. Each bar is the average of three participants for one task. Dark bars show V1 and light bars show V2. The labels give the averages in seconds.

[Point to the completion figures on the right.]

All nine task attempts were completed in V2 without direct help, just as in V1. The second round therefore did not increase the completion total. The main differences were the time taken and the routes people chose.

[Point to the middle pair of bars.]

The clearest difference was in resuming the audiobook. The average was 27.0 seconds in V1 and 13.3 seconds in V2. In V1, only one of three people used Continue Listening directly. In V2, all three did. The route observations and the times therefore point in the same direction for this task.

The other averages were also lower in the second round. Finding and saving took 27.7 seconds in V1 and 22.3 seconds in V2. Browsing podcasts took 5.3 seconds and 3.7 seconds respectively. These figures describe what happened in our sessions.

We need to be careful with the explanation. There were only three people in each round, and they were different people. Individual differences could affect both speed and route choice. We also introduced the Home changes together, so we cannot separate the effect of the smaller banner from the clearer heading.

The result is promising for the tested interactions. It suggests that the updated Home screen may have helped people find unfinished content more directly, but it does not prove that the redesign alone caused the difference.

## Slide 9 — Conclusion

**Presenter:** Sarshar Chavoshi Rad  
**Target time:** 1:30  
**Finish by:** 17:00

We developed a working interface prototype that brings music, podcasts and audiobooks together. It supports connected tasks such as finding content, saving it to Library and returning to unfinished listening.

The main lesson was that an available feature can still be hard to notice. Everyone completed the first test tasks, but two people missed Continue Listening and found the audiobook through other routes. Watching their actions gave us a reason to change the Home layout.

We made a focused redesign and tested it again. The second group used Continue Listening more directly and recorded shorter task times. That is useful feedback, while the small groups and prototype scope limit what we can conclude.

Next, we would test with more participants and on mobile devices. We would also look at people returning after a break, to see how Library and listening progress work over several visits.

Testing with users helped us make practical design decisions. Thank you. We are ready for your questions.

## Short Q&A preparation

### Why combine different audio types?

We wanted to explore whether a common search and Library could help people find saved audio and continue unfinished listening. We kept clear categories so that music, podcasts and audiobooks remained recognisable. We are not claiming that one combined interface suits everyone.

### Why two testing rounds?

The first round showed specific issues around noticing Continue Listening and finding Save. We changed those areas and used a second round to examine the updated interface with the same core tasks. This connected our design decisions to observations from use.

### Why different participants?

New participants had not already learned the V1 tasks and routes. That helped us observe their first use of V2. However, differences between people could also affect the times, so this was not a controlled demonstration that the redesign caused the change.

### Why change Continue Listening?

Two of the three V1 participants did not notice it and resumed the audiobook through other routes. One also commented on the large banner above it. We reduced that banner and made the Continue Listening heading clearer.

### What are the study's limitations?

We tested three people per version, with different people in each round. We tested only three core tasks in a laptop browser. The prototype used a sample catalogue and displayed progress rather than a complete streaming system. The results concern these sessions and interactions, not every user, device or long-term use.

### What would you improve next?

We would test on phones, include more participants and observe repeated visits with realistic saved progress. Participants also suggested Recently Played and Library sorting. We would explore those ideas and test whether they help, rather than assume that adding them is automatically an improvement.

## Project sources for presenter reference

All slide images are original group materials. Paths below are relative to the repository root.

- Slides 1–2: `report/chapters/01-introduction.tex`.
- Slide 3: `report/chapters/03-method.tex`, `report/chapters/04-design.tex`, and all three original images in `report/figures/lo-fi/`.
- Slide 4: `report/figures/v1/home-overview.png`, `search-focus.png` and `library-focus.png`; workflows in Chapter 4.
- Slide 5: completed testing procedures in `report/chapters/03-method.tex`.
- Slide 6: V1 records in `report/evidence/Omnisound_V1_Usability_Testing_Notes (1).pdf`, summarised in `report/chapters/05-results.tex`; `report/figures/v1/home-comparison.png`.
- Slide 7: matching `home-comparison.png` images in `report/figures/v1/` and `report/figures/v2/`; design explanation in Chapter 4 and visibility/feedback in Chapter 2.
- Slide 8: original `report/figures/results/task-time-comparison.pdf`, Chapter 5 and both completed usability-testing documents in `report/evidence/`.
- Slide 9 and Q&A: `report/chapters/06-discussion.tex`, with the completed methods and results in Chapters 3 and 5.
