# Lab 37 - React 1

| | |
|:-|:-|
| *Author:*      | Aaron Imbrock |
| *Create Date:* | 02/09/2020    |
| *Language:*    | ReactJS    |

Created an Odometer web page using ReactJS.

## Challenge

- Display an odometer with 4 digits
  - Pad with zeroes as needed (e.g. 0045)
    - JavaScript has a method for this. Research as needed.
- Add buttons to increment/decrement the ones place, the tens, the hundeds place and the thousands place.
  - Roll over when odometer value exceeds 9999
  - Odometer should remain at zero when decrementing below zero.
- The root `App` component should contain `Odometer`,  `Header` and `Footer` class based components.
  - `Header` component should receive a `greeting` value via props.
  - `Footer` component should receive a `trademark` value via props.
  - `Odometer` component should store numeric value in it’s state.
    - Remember to update state in the React way.
