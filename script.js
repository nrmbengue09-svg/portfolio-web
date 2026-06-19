document.addEventListener("DOMContentLoaded", function() {

    // 1. Gestion de la page COMPÉTENCES (Bouton Afficher les détails)
    const btnSkills = document.getElementById("toggle-skills-btn");
    if (btnSkills) {
        btnSkills.addEventListener("click", function() {
            const tousLesDetails = document.querySelectorAll(".skill-detail");
            
            tousLesDetails.forEach(function(detail) {
                detail.classList.toggle("hidden");
            });

            if (btnSkills.textContent === "Afficher les détails") {
                btnSkills.textContent = "Masquer les détails";
            } else {
                btnSkills.textContent = "Afficher les détails";
            }
        });
    }

    // 2. Gestion de la page PROJETS (Boutons Voir Plus individuels)
    const boutonsProjets = document.querySelectorAll(".btn-more");
    boutonsProjets.forEach(function(bouton) {
        bouton.addEventListener("click", function() {
            const carte = this.parentElement;
            const blocInfo = carte.querySelector(".project-more-info");
            
            blocInfo.classList.toggle("hidden");

            if (blocInfo.classList.contains("hidden")) {
                this.textContent = "Voir plus";
            } else {
                this.textContent = "Voir moins";
            }
        });
    });

    // 3. Gestion du FORMULAIRE DE CONTACT
    const formulaire = document.getElementById("contact-form");
    const zoneMessage = document.getElementById("form-message");

    if (formulaire) {
        formulaire.addEventListener("submit", function(evenement) {
            evenement.preventDefault(); // Empêche la page de se recharger

            // Récupération des valeurs entrées par l'utilisateur
            const nom = document.getElementById("nom").value.trim();
            const prenom = document.getElementById("prenom").value.trim();
            const email = document.getElementById("email").value.trim();
            const sujet = document.getElementById("sujet").value.trim();
            const message = document.getElementById("message").value.trim();

            // Vérification si un champ est resté vide
            if (nom === "" || prenom === "" || email === "" || sujet === "" || message === "") {
                zoneMessage.innerHTML = "<div class='alert alert-error'>Veuillez remplir tous les champs.</div>";
                return;
            }

            // Vérification rudimentaire de l'adresse email
            if (!email.includes("@") || !email.includes(".")) {
                zoneMessage.innerHTML = "<div class='alert alert-error'>L'adresse email n'est pas valide.</div>";
                return;
            }

            // Si tout est correct
            zoneMessage.innerHTML = "<div class='alert alert-success'>Votre message a bien été envoyé !</div>";
            formulaire.reset(); // Vide les champs du formulaire
        });
    }
});