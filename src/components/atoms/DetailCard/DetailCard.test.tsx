import React from "react";
import { render, screen } from "@testing-library/react";
import { DetailCard } from "./DetailCard";

describe('DetailCard component', ()=>{
    const renderComponent = () => {
        const defaultProps = {
            className: "addition-classes",
            tag: "Sample tag",
            title: "Sample Title",
            scoreValue: "10",
            flex: false,
            bgColor: "black",
            textColor: 'yellow'
        };
        render(
          <DetailCard {...defaultProps} />,
        );
      };

    it('render without error', () =>{
        renderComponent();
        expect(screen).not.toBeNull();
    })
})