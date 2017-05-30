## Website Performance Optimization portfolio project

 `public` is the original web and `dist` is the minized web.

* Firstly, tackling with the HTML with stylesheets order, I put the basic style(bootstrap-grid) first before customized style(style.css).

* Secondly, I will tackling with js and css, which is the most important part.

    * I remove all the initial syle which Javascript deal with such as `pizzaContainer.style.width = "33.33%";` and put those style in CSS such as `.randomPizzaContainer {33.33%}`. Also remove styles with written in the DOM such as `div id="pizza0" class="randomPizzaContainer" style="width:33.33%; height: 325px;">`.
    
    * I reduce the query DOM operation. I make the query operation out of the loop. i.e:`var pizzasDiv = document.getElementById("randomPizzas");for (var i = 2; i < 100; i++) {pizzasDiv.appendChild(pizzaElementGenerator(i));}` . And put the new DOM into array. `var items=[];for (var i = 0; i < 200; i++) {elem = document.createElement('div');items.push(elem);}`.
    
    * Change the function of resize the pizza size. Turn it into resizing the pizza by control the className, in order to reduce the extra caculation and the operation of the DOM.
    
    * `Scroll` affect the prefomance most. Beacuse we need to visit the parameter of `document.body.scrollTop ` to accomplish the animation. So first remove this visit out of the loop and then reduce the caculation of the left value applied to items.
    
    * Using `requestAnimationFrame` to improve the speed.
            
* Finally, minimize all files including images in the project by using gulp. 
