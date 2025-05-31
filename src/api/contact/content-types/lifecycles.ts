export default {
  // Avant la création d'un contact
  beforeCreate(event: any) {
    const { data } = event.params;
    
    // Ajouter automatiquement la date de création
    if (!data.dateCreation) {
      data.dateCreation = new Date();
    }
  },

  // Email automatique après création
  async afterCreate(event: any) {
    const { result } = event;
    
    try {
      await strapi.plugins['email'].services.email.send({
        to: 'contact@manofstyle.fr',
        subject: `🏗️ Nouveau devis - ${result.nom}`,
        html: `
          <h2>Nouvelle demande de devis MAN OF STYLE</h2>
          <p><strong>Nom :</strong> ${result.nom}</p>
          <p><strong>Email :</strong> ${result.email}</p>
          <p><strong>Téléphone :</strong> ${result.telephone || 'Non renseigné'}</p>
          <p><strong>Type de projet :</strong> ${result.expertise || 'Non précisé'}</p>
          <p><strong>Budget :</strong> ${result.budget || 'À discuter'}</p>
          <p><strong>Message :</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${result.message}
          </div>
          <hr>
          <p><em>Demande reçue le ${new Date(result.dateCreation).toLocaleString('fr-FR')}</em></p>
        `,
      });
    } catch (error) {
      console.error('Erreur envoi email:', error);
    }
  },
};