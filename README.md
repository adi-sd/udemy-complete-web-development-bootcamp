# udemy-complete-web-development-bootcamp

## 1. Front-End Web Development

> 1. How does the internet actually work? \
>    Connected Computers all over the world \
>    ( DNS : Domain Name System Server ) - basically an address/phonebook book

> 2. How does websites works?
>     1. HTML : The Content
>     2. CSS : The Style, Colors appears
>     3. Java Script : The Functionality

> 3. What are Webpages? \
>    A web page is a hypertext document on the World Wide Web. Web pages are delivered by a web server to the user and displayed in a web browser. A website consists of many web pages linked together under a common domain name.

## 2. Introduction to HTML

-   You cannot created website just with CSS and Javascript , HTML is mandatory
-   HTML markup is done uning html tags
-   Headings tag \<h#>
    -   From h1 to h6
    -   Don't have more than one h1
    -   Don't skip level of headings tag
-   Paragraph Element \<p>
-   Html Void Elements
    -   \<hr/> - Horizontale Line
    -   \<br/> - Break
    -   Don't use breaks as a new lines
    -   Write the complete the tag with "/" as well for readbility

## 3. Intermediate HTML

-   Html List Elements
    -   Un-Ordered List \<ul>
    -   Ordered List \<ol>
    -   They both have list elements - \<li>
-   Html Attribute
    -   \<tagname attribute=value> Html Text \</tagname>
-   Html Anchor Element \<a>
    -   needs an attribute \<a href=\"link">Link Text</a>
-   Html Image Element
    -   \<img src=\"image path" alt=\"alternative picture discription"/>
    -   Don't have closing tag
-   Html Div Element
    -   \<div></div> completely invisible
    -   whole puspose is to act as a container for applying CSS

## 4. Multipage Websites

-   File Paths :

    > -   Absolute File Path : Relative to the Root of the Computer System

              Ex - /Users/adi.s.d/Downloads/3.4 Birthday Invite Project

    > -   Relative File Path : Relative to Current dirctory usually

              Ex - intermediate-html/anchor-tag.html

-   Symbols :

    >

           -   "../eassay.docx" - one directory up the current location
           -   "./eassay.docx" - inside the current directory

-   Html Boilerplate

    -   \<!DOCTYPE html> : tells browser about the html version
    -   \<html lang=\"en"> : The main html tag, Language declaration for assistive devices
    -   \<head> tag : Header information of your webpage
        -   \<meta charset=\"UTF-8"> : tells browser about character encoding of the webpage
        -   \<title>Title of your website\</title> : Dispalyed on Chrome tab
    -   \<body> tag : All the conent of the webpage

-   Ex -

          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
          </head>
              <body>
              </body>
          </html>

## 5. Introduction to CSS

-   CSS : Cascading Style Sheet
-   SASS : Syntactically awesome stylrsheet
-   LESS : Leaner CSS
-   How to add CSS?

    >

          1.  Inline : Targetting a single HTML element
              Ex - <tag style="css">
          2.  Internal : Targeting a single HTML page
              Ex - <style>CSS</style>
          3.  External : Targetting multipage website, a separate file for CSS
              Ex - <link href="style.css">

-   CSS Syntax -

    >

          <tag-selector> {
              <css-property> : <css-property-value>
          }

-   CSS Slectors

    -   A part that selects the html elements to apply the rules to

    -   Types : > 1. Element Selector -
        <name-of-the-tag> { CSS Code } 2. Class Selector -
        .<name-of-the-class> { CSS Code }
        ( Class name is an atrribute added to html tag for grouping similar styled elements ) 3. Id Selector - #<elemet-id> { CSS Code }
        ( Id is an attribute for a html tag to identify it as unique ) 4. Attribute Selector -
        <tag-name>[<attribute-name>="<attribute-value>"]{CSS Code}
        ( Select a tag with specific attribute or specific attribute value pair ) 5. Universal Selector - \* {CSS Code}
        (Select everything)

## 6. CSS Properties

-   Color Properties

    -   background-color
    -   color (text color)
    -   named colors
    -   hex Codes rgb()
    -   colorhunt.com

-   Font Properties

    -   Font Size :
        -   1px = 1/96th inch = 0.26mm
        -   1pt = 1/72nd inch = 0.35mm
        -   1em = 100% of parent (Relative Size)
        -   1rem = 100% of root (Relative Size)
        -   named sizes = large, xx-large, small, etc.
    -   Font Weight :
        -   normal, bold
        -   lighter, bolder : relative to parent
        -   number : 100 - 900 range
    -   Font Family : \<font-name>, \<back-up-type-face>
        -   sans serif : no feet, right angle edges
        -   serif : letters with feet
        -   Helvetica, sans-serif
        -   "Times New Roman", serif
        -   fonts.google.com
    -   Text Align :
        -   start, end, center, justify

-   CSS Box Model

    -   Element Size
        -   height: \<size-in-pixel or percentage>
        -   weidth: \<size-in-pixel or percentage>
    -   Margin
        -   distance between the end of the border and other elements
    -   Padding
        -   distance between content of the element and its border
    -   Border

        -   border: \<thickness> \<style> \<color>
        -   if the thickness is changed the border will grow outwards
        -   border-width: \<top> \<right> \<bottom> \<left> OR <top+bottom> <left+right>
        -   OR separately like - border-top : \<size>

    -   ( All values work like border )

        ![CSS Box Model](image.png)

## 7. Intermediate CSS

-   CSS Cascade

    -   if you have multiple CSS rules targetting same HTML element but they have an order of importance so the most important style gets displayed
    -   4 categories to determine overall importance of CSS rule

    1. Position : importance from top to bottom in external and internal css
    2. Specificity : how specific a selector is; element slector < class selector < attribute < id
    3. Type : inline style > internal style > external stylesheet
    4. Importance : ! important keyword - \<css-property> : \<css-value> !important;

    Important keyword > Type > Specificty > Position

-   Combining CSS

    -   Ways to Combine CSS Slector
        -   Group Rule : \<selctor-1> , \<selector-2> { CSS Rule } \
            (Both groups are selected)
        -   Child Rule : \<parent-selctor> \> \<child-selector> { CSS Rule } \
            (Only 1st level of children are selected)
        -   Descendant Rule : \<selctor-1> \<selector-2> { CSS Rule } \
            (Descendant of the left side is selected)
            (Works with 2nd, 3rd level children as well)
        -   Chanining Rule : \<selctor-1>\<selector-2> { CSS Rule } \
            (Apply where all selectors are true)
            (Alwaya start with elemet selectors for chaining)
    -   Combining Combiners : All above can be combined together as well

-   CSS Positioning

    -   Values of CSS Property Position :
        1.  static (default) position - is fixed left, right, top bottom properties doesn't work
        2.  relative position - relative to the default (static) position; left, right, top and bottom properties are enabled
        3.  absolute position - relative to nearest positioned ancestor or top left corener of the webpage if the element doen't have a positnied ancestor; left, right, top and bottom properties are enabled; ancestor should br relative \
            ( Z - index : which element goes on top of which; higher the index, the most on top the element is!)
        4.  fixed positioning - relative to top left of the browser window; if you scroll it will stay in the same page and alway will be visible
    -   Positioning is separate from margin

## 8. Advanced CSS

-   CSS Display Property

    -   \<span></span> tag : it has different value for display (inline)
    -   by default all other elemets have display: block
    -   Values
        1. block:
            - takes up entire full width of the page
            - elements goes on next line by default
        2. inline:
            - take up part of the line so we can fit the next element on the same line until we have space
            - We cannot set width and height of the element
        3. inline-block:
            - same spacing as inline but have the height an width properties
        4. none:
            - hides the element on the page, its there but its not rendered
    -   This is used to set up the layout of the web page

-   CSS Float

    -   This allows us to wrap text around another text
    -   elements with this property are taken out of the html float
    -   Values
        1. left
        2. right
    -   Having float set to an element will make all the other elements wrap around it;to escap the wrapping around we need to set "clear" property of the required element same as float (left, right or both)

-   How to Create a responsive website?
    -   Our website should change and look beautiful on different screen sizes
    -   Ways to do this -
        1. Media Query
            - Something to use as a wrpper for the CSS selector
                ```
                @media (max-width: 600px) {
                    CSS-Code
                }
                ```
            - This actually applies the wrapped CSS when the screen/window width is less than or equal to 600px
        2. CSS Grid
            - Really flexible for creating the web page layout
            - You have a parent div which has diaplay: grid, then we can use grid properties.
            - They have properties for defing the rows and columns, cell sizes and even the gap between then as well
            - It applies to 2D layout; rows and columns
        3. CSS Flexbox
            - You have a parent div which has diaplay: flex, then we can use flexbox properties for elemets inside that container.
            - flex: 1 divide the width in equal parts for each element
            - It is a 1D layout systems wher we can control how to display elements in horizontal or vertical manner
        4. Bootstrap Framework
            - it is external not included into CSS
            - they have predefined CSS classes that can be assigned to our desired html elements
            - Bootstrap is build on top of CSS flexbox - they have 12 box system which divies the row in 12 equal boxes, we can resize the elements to occupy more than one of those boxes
    -   No such things as a best one people uses combinations of these

-   Media Queries
    - Query Keywords
        1. max-width : less than or equal to
        2. min-width : greater than or equal to
        3. screen / print : used in screen mode or if someone is printing the web page cusing Cntrl + p
    - The queries can be combined with "and" 
    - Documentation - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
