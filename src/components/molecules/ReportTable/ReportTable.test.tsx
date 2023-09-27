import { render, screen } from "@testing-library/react";
import { ReportTable, ReportTableProps } from "./ReportTable";

describe('ReportTable', ()=>{
    const renderComponent = (additionalProps?: Partial<ReportTableProps>) => {
        const defaultProps: ReportTableProps = {
            tableHeader: "HeaderName",
            tableBody: [
                { fields: { Name: "HeaderName", yourScore: 50, yourCompiteiter1: 60, yourCompiteiter2: 70 } },
                { fields: { Name: "Row1Name", yourScore: 90, yourCompiteiter1: 80, yourCompiteiter2: 75 } },
            ],
            tag: "TestTag"
        };

        render(<ReportTable {...defaultProps} {...additionalProps}/>);
      };

      it("render without error", () => {
        renderComponent();
        expect(screen).not.toBeNull();
      });

      it("should not render a row when the Name in tableBody matches tableHeader", () => {
        renderComponent();
        expect(screen.queryByText('HeaderName')).not.toBeInTheDocument();
        expect(screen.queryByText(50)).not.toBeInTheDocument();
        expect(screen.queryByText(60)).not.toBeInTheDocument();
        expect(screen.queryByText(70)).not.toBeInTheDocument();
      });
      
      it("should render a row when the Name in tableBody not matches tableHeader", () => {
        renderComponent();
        expect(screen.getByText('Row1Name')).toBeInTheDocument();
        expect(screen.getByText(90)).toBeInTheDocument();
        expect(screen.getByText(80)).toBeInTheDocument();
        expect(screen.getByText(75)).toBeInTheDocument();
      }); 
})