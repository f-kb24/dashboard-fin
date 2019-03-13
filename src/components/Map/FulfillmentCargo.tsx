import * as React from "react";
import styled from "styled-components";
import { MapContext } from "./MapContext";

const FulfillmentCargoContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FulfillmentMiddle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
`;

const FulfillmentTitle = styled.div`
    color: #eef3f7;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
`;

const FulfillmentWeights = styled.div`
    border-radius: 6px;
    background-color: #ffb366;
    padding: 0.1rem 0.3rem;
    margin: 0rem 0.5rem 0.5rem 0rem;
`;
const FulfillmentSpecsContainer = styled.div`
    display: flex;
    align-items: center;
`;
const FulfillmentItemContainer = styled.div`
    width: 90%;
    margin: 0.3rem 0rem;
    background-color: #182a34;
    display: flex;
    padding: 0.5rem 0.5rem;
    border-radius: 4px;
`;

const FulfillmentItemCount = styled.div`
    font-size: 2.5rem;
    border-radius: 4px;
    background-color: #dce8ef;
    color: #182a34;
    text-align: center;
    padding: 0.5rem 0.5rem;
`;

interface Props {}

export const FullfillmentCargo: React.FC<Props> = () => {
    const { currentShipment } = React.useContext(MapContext);

    React.useEffect(() => {
        if (currentShipment) {
        }
    }, [currentShipment]);

    return (
        <FulfillmentCargoContainer>
            {currentShipment &&
                currentShipment.items.map(item => {
                    return (
                        <FulfillmentItemContainer>
                            <FulfillmentItemCount>
                                {item.count}
                            </FulfillmentItemCount>
                            <FulfillmentMiddle>
                                <FulfillmentTitle>
                                    {item.name} {item.id}
                                </FulfillmentTitle>
                                <FulfillmentSpecsContainer>
                                    <FulfillmentWeights>
                                        {item.v}
                                    </FulfillmentWeights>
                                    <FulfillmentWeights>
                                        {item.w}
                                    </FulfillmentWeights>
                                </FulfillmentSpecsContainer>
                            </FulfillmentMiddle>
                        </FulfillmentItemContainer>
                    );
                })}
        </FulfillmentCargoContainer>
    );
};
