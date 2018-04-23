## Test Project - Time Tracker using React/Redux/Express/Mongo

## Installation Instructions

First you need to install server-side dependencies using `npm`. Go to the `test__timetracker` folder and run:

```
$ npm install
```

Next enter `client` folder and install client-side dependencies with:

```
$ npm install
```

## Run Instructions

From the `test__timetracker` folder run:

```
$ npm run dev
```

Then wait for the app to open automatically in your browser or open a new tab and enter `http://localhost:3000/` address.

Now the app should be running!

## Requirements

* [ ] As user, I want to be able to conveniently start a tracker that counts the spent time for me.

  * [ ] The tracker should start tracking with a single click.
  * [ ] Time is displayed in a user friendly format, specifically hh:mm:ss.
  * [ ] The timer can be paused and resumed.

* [ ] As user, I want to book time for tasks with a description.

  * [ ] The ability to book time directly from the tracker. This should set the tracker to 0 after the
        booking has happened.
  * [ ] The ability to book time without the tracker (in cases I forgot to start the tracker before
        working on an issue).
  * [ ] Free text description where I can enter what I worked on (mandatory).
  * [ ] Date and time of the tracking (when did I finish the task, mandatory as well).

* [ ] As user, I want to have a user friendly overview for all my tracked times.
  * [ ] Listing of all the tracked time I booked in the past.
  * [ ] Search functionality that searches/filters all the descriptions of every time log.
  * [ ] Some sort of pagination (Calendar? Page based pagination?) so that I don't see millions of time
        logs from the past.

## Time Spent

13 hours, had to explore some topics

## Liked / Didn't Like

* [ ] Liked:
  * [ ] New kind of project, never even used a time tracker before (except for pomodoro timers)
  * [ ] Opportunity to write backend code - this is what I want to learn right now
* [ ] Didn't like:
  * [ ] Spent time on getting my head around the task, had to google timetrackers and see what they are doing, then spent time deciding on app layout - all in all it took several hours before I wrote first lines of code
  * [ ] Didn't have time to create my own design (instead relied on Material-UI) and add features

## Other

* [ ] Parts I would have done differently, parts needing improvement:
  * [ ] Design
  * [ ] Interface
  * [ ] Search functionality
* [ ] Parts I am satisfied with:
  * [ ] Pagination (though it is from Material-UI)
* [ ] Would have added:
  * [ ] Search functionality using calendar
  * [ ] Edit/delete functionality
  * [ ] Some sort of statistics
