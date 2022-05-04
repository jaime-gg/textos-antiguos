import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="h-75 p-3 orderPage">
        <Link to="/">← Back to Books</Link>

        {user ? (
          <>
            
            <div className="orderArea p-5"><h2 className="">
              Order History for {user.firstName} {user.lastName}
            </h2>
              {user.orders.map((order) => (
                <div className="divider mb-5">
                  <table className="p-3" key={order._id}>
                    <tbody>
                      <tr>
                        <th className="date">
                          {new Date(
                            parseInt(order.purchaseDate)
                          ).toLocaleDateString()}{" "}
                          :
                        </th>
                      </tr>

                      {order.books.map(({ _id, image, name, price }, index) => (
                        <div className="itemdivider">
                          {" "}
                          <tr key={index}>
                            <th className="p-3">
                              {name}
                              <br></br>x 2
                            </th>

                            <td className="p-3">${price}</td>

                            <td>
                              <Link to={`/books/${_id}`}>
                                <img
                                  className="orderCover"
                                  alt={name}
                                  src={`../../images/${image}`}
                                />
                              </Link>
                            </td>
                          </tr>
                        </div>
                      ))}
                    </tbody>
                  </table>
                  <p className="p-3 m-0">Total : $ USD</p>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>{" "}
      <div className="about row h-25">
        <p className="py-4 px-4">
          Textos Antiguos has been in the vintage book business since before it
          was cool, and we are proud to say that we’ve got the books to prove
          it! If you’re looking for an old book about Relativity and the Fourth
          Dimension, or if you need some help tracking down that rare first
          edition cover art, then you’ve come to the right place. Browse our
          online catalog to find some of the best deals on books that hold rich
          cultural and design significance !{" "}
        </p>
      </div>
    </>
  );
}

export default OrderHistory;
