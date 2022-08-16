import { Container } from './Background.styled';

/**
 * Composant UI
 *
 * Représente l'espace cliquable derrière le calendrier
 * Apparait uniquement quand celui ci est affiché
 * Il catch les clics pour permettre la fermeture du calendrier
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function Background(props) {
    const { action } = props;

    return (
        <Container onClick={action} />
    );
}

export default Background;
