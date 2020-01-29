# IntelliJ IDEA Tips

### Getting rid of the annoying warning `Unresolved function or method describe` on your test files

  * Select menu: `File` -> `Settings`
  * Go to: `Languages & Frameworks` -> `Javascript` -> `Libraries`
  * If `@types/jest` is on the list, check it! If not:
    * Press the `Download...` button
    * Wait until the list is loaded
    * Click on the list and type `jest` to find it among all the items in the list
    * Press `Download and Install`
    * After the download `@types/jest` must now be displayed in the check list 