import "./bill.css"

export const Bill = () => {
  return (
    <>
      <div class="ticket">
        <img src="./logo.png" alt="Logo" />
        <p class="centered">
          RECEIPT EXAMPLE
          <br />
          Address line 1
          <br />
          Address line 2
        </p>
        <table>
          <thead>
            <tr>
              <th class="quantity">Q.</th>
              <th class="description">Description</th>
              <th class="price">$$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="quantity">1.00</td>
              <td class="description">ARDUINO UNO R3</td>
              <td class="price">$25.00</td>
            </tr>
            <tr>
              <td class="quantity">2.00</td>
              <td class="description">JAVASCRIPT BOOK</td>
              <td class="price">$10.00</td>
            </tr>
            <tr>
              <td class="quantity">1.00</td>
              <td class="description">STICKER PACK</td>
              <td class="price">$10.00</td>
            </tr>
            <tr>
              <td class="quantity"></td>
              <td class="description">TOTAL</td>
              <td class="price">$55.00</td>
            </tr>
          </tbody>
        </table>
        <p class="centered">
          Thanks for your purchase!
          <br />
          parzibyte.me/blog
        </p>
      </div>
    </>
  );
};