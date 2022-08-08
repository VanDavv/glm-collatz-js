# Golem Collatz Conjecture App

This application calculates [Collatz conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture) for a provided numbers range.
Given range start as A and end as B, this application will split the range into subgroups and execute
each batch on a separate Golem network provider.

## Demo

![demo](https://user-images.githubusercontent.com/5244214/183415482-68b7380d-666d-4311-b83a-1866b89dbe57.gif)

## Setup

Prerequisites:

- Node v14.17 or higher
- Yarn v1.22 or higher
- Yagna daemon running ([docs](https://handbook.golem.network/requestor-tutorials/flash-tutorial-of-requestor-development))

Install packages

```
$ yarn
```

## Run

To execute the whole example, run the following command

```
$ yarn run start range_start range_end batches
```

The **main.js** file configures Golem network and deploys the task to the workers (stored in the **task.js**)

```
positional arguments:
  range_start           Specify search range start (inclusive)
  range_end             Specify search range end, (non-inclusive)
  batches               Specify number of batches to split the calculations to (optional)
```
