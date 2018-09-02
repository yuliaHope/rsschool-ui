export function setCardStyle(isEndAssignment: boolean, score: number, status: string) {
    const card = {
        className: '',
        cardHeader: {
            title: '',
            className: '',
        },
    };
    if (isEndAssignment) {
        card.className = 'border-danger';
        card.cardHeader.title = 'The deadline has passed!';
        card.cardHeader.className = 'text-white bg-danger';
    } else if (status === 'Assigned') {
        card.className = 'bg-secondary';
        card.cardHeader.title = 'Not submitted yet!';
        card.cardHeader.className = '';
    } else if (status === 'Checked') {
        if (score === 100) {
            card.className = 'border-success';
            card.cardHeader.title = 'Done!';
            card.cardHeader.className = 'text-white bg-success';
        } else {
            card.className = 'border-warning';
            card.cardHeader.title = 'Done!';
            card.cardHeader.className = 'text-white bg-warning';
        }
    }
    return card;
}
