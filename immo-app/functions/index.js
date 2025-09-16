const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre_email@gmail.com",
    pass: "votre_mot_de_passe_app",
  },
});

exports.sendSubscriptionConfirmation = functions.firestore
    .document("subscriptions/{subscriptionId}")
    .onCreate(async (snap, context) => {
      const subscriptionData = snap.data();
      const {
        fullName,
        email,
        selectedServices,
        message,
      } = subscriptionData;

      const servicesList = selectedServices
          .map((serviceId) => {
            return `- ${serviceId.replace(/-/g, " ").toUpperCase()}`;
          })
          .join("\n");

      const mailOptions = {
        from: "Votre Agence Immobilière <votre_email@gmail.com>",
        to: email,
        bcc: "votre_email_de_confirmation@votreentreprise.com",
        subject:
                "Confirmation de votre demande de souscription Confort Immo",
        html: `
                <p>Bonjour ${fullName},</p>
                <p>Nous avons bien reçu votre demande de souscription
                pour les services suivants :</p>
                <pre>${servicesList}</pre>
                ${
                    message ?
                        `<p>Votre message : ${message}</p>` :
                        ""
}
                <p>Notre équipe vous contactera très prochainement pour
                discuter des détails.</p>
                <p>Merci de votre confiance.</p>
                <p>L'équipe Confort Immo</p>
            `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(
            "Email de confirmation de souscription envoyé à",
            email,
        );
        return null;
      } catch (error) {
        console.error(
            "Erreur lors de l'envoi de l'email de souscription:",
            error,
        );
        return null;
      }
    });

exports.sendDevisConfirmation = functions.firestore
    .document("devisRequests/{devisId}")
    .onCreate(async (snap, context) => {
      const devisData = snap.data();
      const {
        fullName,
        email,
        requestedServices,
        estimatedPrice,
        message,
      } = devisData;

      const servicesDetails = requestedServices
          .map((s) => `- ${s.name} (${s.price}€ estimé)`)
          .join("\n");

      const mailOptions = {
        from: "Votre Agence Immobilière <votre_email@gmail.com>",
        to: email,
        bcc: "votre_email_de_confirmation@votreentreprise.com",
        subject:
                "Confirmation de votre demande de devis Confort Immo",
        html: `
                <p>Bonjour ${fullName},</p>
                <p>Nous avons bien reçu votre demande de devis
                pour les services suivants :</p>
                <pre>${servicesDetails}</pre>
                <p><strong>Coût estimé total : ${estimatedPrice}€</strong></p>
                ${
                    message ?
                        `<p>Votre projet : ${message}</p>` :
                        ""
}
                <p>Cette estimation est préliminaire.
                Notre équipe vous contactera très bientôt pour affiner votre
                besoin et vous fournir un devis détaillé et précis.</p>
                <p>Merci de votre confiance.</p>
                <p>L'équipe Confort Immo</p>
            `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(
            "Email de confirmation de devis envoyé à",
            email,
        );
        return null;
      } catch (error) {
        console.error(
            "Erreur lors de l'envoi de l'email de devis:",
            error,
        );
        return null;
      }
    });
