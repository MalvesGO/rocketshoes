import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="data:image/webp;base64,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"
                alt="tenis"
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>129.90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258.00</strong>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button>Finalizar Pedidos</button>
        <Total>
          <span>Total</span>
          <strong>R$ 219.00</strong>
        </Total>
      </footer>
    </Container>
  );
}
