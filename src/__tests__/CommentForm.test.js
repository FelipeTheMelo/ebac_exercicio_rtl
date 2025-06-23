import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Teste de inserção de comentários', () => {
    test('deve inserir dois comentários e exibi-los', () => {
        render(<App />);

        const inputComentario = screen.getByTestId('input-comentario');
        const botaoEnviar = screen.getByTestId('botao-enviar');

        // Primeiro comentário
        fireEvent.change(inputComentario, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(botaoEnviar);

        // Segundo comentário
        fireEvent.change(inputComentario, { target: { value: 'Segundo comentário' } });
        fireEvent.click(botaoEnviar);

        // Verificações
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});