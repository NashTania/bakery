
### Tasks for Tatiana ###
* Delete unnecessary files and folders
* Create controller files for all screens
* Before and after this assignment, please, read some article about OOP. You need to understand what is abstraction, polymorphism and encapsulation, after you did this assignment.
* Write down abstract controller class (do not forget to load it in the project)
* Move one by one controllers to their own files and write them down based on prototype inheritance approach. (Everyone should be extended from AbstractController)
  * Use new MainNameController in router object instead of direct object writing
  * Do not forget to use AbstractController in cases where no specific behavior required
  * Do not forget to pass template name as a AbstractController constructor argument, or as a property value of particular controller when it exists.
* Extract Views as a separate classes structure (the same way as controllers written)
  * In this case you will pass view objects instead of template names to controllers
  * While view classes will accept template names
  as constructor parameters
  * Template names of particular views should be moved to view classes from controller classes in this case
  * All methods that are related to rendering need to be moved to views
  * All methods that are related to event observing need to be kept in the controller, so you need to pass a controller to its view to be able to attach this methods to view events
* Extract Models as a separate classes structure (the same way you extracted view structure)

### Additional assignment ###
* Pack all your javascript with webpack plugin.
  * Start from couple of dependent files, i.e. router.js and one of the controllers
  * Use commonjs approach to make dependencies between chosen js files
  * Load the built file instead of particular files for router.js and one of the controllers
  * Move all js files to built file
  * Install jquery with the webpack and include it into your project the same way
  * After you've done all your project has to load the whole js as one file
* Pack all your css files with webpack plugin to make a one file from it
* Pack all your html templates in javascript with the webpack
* Use webpack config to separate javascript with libraries and your app code into batches.

```
Examples and boilerplate for additional assignment can be found in the internet
```
