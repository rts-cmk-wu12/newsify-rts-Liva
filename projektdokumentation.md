# Projektdokumentation

**Navn:** Liva Kuhlmann

**Hold:** WU12

**Uddannelse:** Webudvikler

**Uddannelsessted:** Roskilde Tekniske Skole

[Link til min applikaton](https://rts-cmk-wu12.github.io/newsify-rts-Liva/)


## Teknologier

-   HTML
-   CSS
-   SCSS
-   JavaScript
-   Webpack
-   WebpackServe
-	Jest
-   Postcss
-   FontMagician

---



### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

Har brugt lidt ChatGPT til swipe funktionen.

---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

Valgte at man ikke kunne gemme til arkiver på popular siden, det gav ikke mening for mig da jeg kodede det.

---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Fik aldrig sadt søge api'et op, fik prioteret andre ting i stedet.
Nåede aldrig til at lave tests. Ville gerne haft fået lavet dem som jeg lavede min funktioner, men havde ikke tiden.

---
### En beskrivelse af særlige punkter til bedømmelse

Vi var aldrig blevet lært i at lave en swipe funktion, så denne del var svær. Mit endelige resultat er ikke helt som jeg vil have det. Når der swipes gør den grønne boks ikke tilbage igen, uden brugeren selv swiper. Dette ville jeg havdet ændret havde jeg haft tiden.
```js
export function saveArticle(articleElement, articleTitle) {
    let startX, endX;
  
    if (!articleElement) return;
  
    articleElement.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });
  
    articleElement.addEventListener('touchmove', e => {
      endX = e.touches[0].clientX;
    });
  
    articleElement.addEventListener('touchend', () => {
      if (startX - endX > 50) {
        articleElement.classList.add('swiped');
        localStorage.setItem(articleTitle, 'saved');
      } else if (endX - startX > 50) {
        articleElement.classList.remove('swiped');
      }
    });
  
    const swipeAction = articleElement.querySelector('.swipe-action');
    if (swipeAction) {
      swipeAction.addEventListener('click', () => {
        articleElement.remove();
      });
    }
  }
```

Jeg valgte at style knapperne som placeholders. Dette var et godt valg da jeg skulle havdet gentaget meget af det samme kode uden.

```scss
@use './root.scss';
@use './mixins.scss';

%button-transparent-small {
    @include mixins.button-template;
    border: solid root.$dark-sage-green;
    color: root.$dark-sage-green;
    background: none;
}

%button-transparent-white-small {
    @include mixins.button-template(50%);
    padding-block: .5rem;
    background: none;
    border: 1px solid root.$white;
    color: root.$white;
    font-size: .8em;
}

%button-green-small {
    @include mixins.button-template;
    border: none;
    background-color: root.$dark-sage-green;
    color: root.$white;
}

%button-transparent-big {
    @include mixins.button-template(100%);
    border: solid root.$grey;
    color: root.$soft-black;
    background: none;
}

%button-transparent-green-big {
    @include mixins.button-template(100%);
    border: solid root.$dark-sage-green;
    color: root.$dark-sage-green;
    background: none;
}

%button-green-big {
    @include mixins.button-template(100%);
    border: none;
    background-color: root.$dark-sage-green;
    color: root.$white;
}
```