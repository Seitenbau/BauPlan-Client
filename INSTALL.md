## Install

# Config:

* Plans:

   Add all plans of your place of work as images (it expect .svg) in app/utils/floorplans/

* Config:
  - app/utils/system.json:

   Add a name.

   Add object entries for each Object you want to show.
   > *NOTE:* width and height need to be defined in Meter

  - app/utils/floors.json:

    Add entries for each Plan you have, and add the scaling factor.

    > scaling factor is the amount of px on the Plan in Meter

  - app/utils/theme.json

   edit the theme.json, till your fine withe the style
   > *NOTE:* that the theme for Objects are not editable in the theme.json, as it is needed in the system

* Add a Iconset
  - change the SVGs in app/utils/images. Map them to the right key in the index.js
