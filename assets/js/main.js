/* Nun erstellen wir uns mit der Methode .innerHTML drei <figure> tags für unsere Galerie. 
Nutze den HTML-Code aus dem Kommentarbereich.
*/

// Mit der .innerHTML-Methode:
let gallery = document.getElementById('gallery');
gallery.innerHTML += '<figure><img src="https://picsum.photos/200/300" alt=""><figcaption>Fig.1</figure>';
gallery.innerHTML += '<figure><img src="https://picsum.photos/200/300" alt=""><figcaption>Fig.2</figure>';
gallery.innerHTML += '<figure><img src="https://picsum.photos/200/300" alt=""><figcaption>Fig.3</figure>';
gallery.style.display = "flex";
gallery.style.justifyContent = "center";

/* for (let i = 0; i < 3; i++) { */

    // Die <figcaption>-Inhalte werden in einem Arry gespeichert.
    // Ebenso alle anderen DOM-Elemente die erzeugt werden müssen werden als Variable gespeichert

/*  let captions = ["fig. 1", "fig. 2", "fig. 3"]
    let gallery = document.getElementById("gallery");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");
    img.src = "https://images.unsplash.com/photo-1672699118104-e1e3d815d486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"; */

    // Durch den Loop wird 3x das Nesting von 'figure > img figcaption' erzeugt

/*  gallery.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption); */

    // Die nummerische Position in der Iteration wird genutzt um die entsprechenden Inhalte für die <figcapton>-Elemente festzulegen.

/*         figcaption.textContent = captions[i];  
} */
