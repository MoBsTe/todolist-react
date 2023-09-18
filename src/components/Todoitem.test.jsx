import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Todoitem from './Todoitem';
const item = { id: 1, text: 'testText', completed: false, important: false }

describe('TodoItem component', () => {
    it('TodoItem render', () => {
        render(<Todoitem item={item} />);

        expect(screen.get(/testText/)).toBeInTheDocument();
    });

});