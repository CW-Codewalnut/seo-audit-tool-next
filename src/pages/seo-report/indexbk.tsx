import React, { useEffect, useState } from "react";
import { arrayOfTags } from "@/Constants/constants";
import { TableData } from "@/utils/api/airtableEndPoints";
import { FieldsStyle } from "@/utils/helpers/FieldsStyle/FieldsStyle";
import { FormatNumber } from "@/utils/helpers/FormatNumber/FormatNumber";

interface RecordFields {
  yourScore?: string | number;
  yourCompiteiter1?: string | number;
  yourCompiteiter2?: string | number;
  Tags: string[];
  Name: string;
}

interface DataRecord {
  id: string;
  fields: RecordFields;
}

export default function Report() {
  const [data, setData] = useState<DataRecord[]>([]);
  const [companyData, setCompanyData] = useState<DataRecord[]>([]);

  useEffect(() => {
    TableData()
      .then((res) => {
        setData(res.data.records);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const companyName = data?.filter(
        (item) => item?.fields?.Tags?.[0] === "CompanyName",
      );
      setCompanyData(companyName);
    }
  }, [data]);

  return (
    <>
      <div className="main-container">
        <div className="header-component">
          <h1 className="text-color-white text-align-center">
            Website health scorecard
          </h1>
          <p className="whs_subheading">{companyData[0]?.fields?.yourScore}</p>
        </div>
      </div>
      <div className="report-seo-card">
        <div className="heading-style-h3">SEO Scorecard</div>
        <table>
          <tbody>
            <tr>
              <td />
              {companyData[0]?.fields?.yourScore && (
                <td>{companyData[0]?.fields?.yourScore}</td>
              )}
              {companyData[0]?.fields?.yourCompiteiter1 && (
                <td>{companyData[0]?.fields?.yourCompiteiter1}</td>
              )}
              {companyData[0]?.fields?.yourCompiteiter2 && (
                <td>{companyData[0]?.fields?.yourCompiteiter2}</td>
              )}
            </tr>
          </tbody>
        </table>
        {arrayOfTags.map((tag) => {
          const filteredData = data.filter(
            (item) => item.fields.Tags[0].trim() === tag,
          );

          const nameMatched = filteredData.find(
            (item) => item.fields.Name.trim() === tag,
          );

          return (
            <div className="main-conatiner" key={tag}>
              <table>
                <tbody>
                  {nameMatched && (
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#0f2a3d",
                          color: "white",
                        }}
                      >
                        {nameMatched.fields.Name}
                      </td>
                      {companyData[0]?.fields?.yourScore && (
                        <td style={{ backgroundColor: "rgb(15, 42, 61)" }} />
                      )}
                      {companyData[0]?.fields?.yourCompiteiter1 && (
                        <td style={{ backgroundColor: "rgb(15, 42, 61)" }} />
                      )}
                      {companyData[0]?.fields?.yourCompiteiter2 && (
                        <td style={{ backgroundColor: "rgb(15, 42, 61)" }} />
                      )}
                    </tr>
                  )}
                </tbody>
              </table>
              <table>
                <tbody>
                  {filteredData
                    .filter((item) => item.fields.Name !== tag)
                    .map((item) => (
                      <tr key={item.id}>
                        <td
                          style={{
                            backgroundColor: "#e9f0f5",
                            color: "#0f2a3d",
                          }}
                        >
                          {" "}
                          {item.fields.Name}
                        </td>
                        <td
                          style={FieldsStyle({
                            item,
                            order: 1,
                            fieldType: "cell",
                            tag,
                            subTags: item.fields.Name,
                          })}
                        >
                          {FormatNumber(item.fields.yourScore || "")}
                        </td>
                        {item.fields.yourCompiteiter1 && (
                          <td
                            style={FieldsStyle({
                              item,
                              order: 2,
                              fieldType: "cell",
                              tag,
                              subTags: item.fields.Name,
                            })}
                          >
                            {FormatNumber(item.fields.yourCompiteiter1 || "")}
                          </td>
                        )}
                        {item.fields.yourCompiteiter2 && (
                          <td
                            style={FieldsStyle({
                              item,
                              order: 3,
                              fieldType: "cell",
                              tag,
                              subTags: item.fields.Name,
                            })}
                          >
                            {FormatNumber(item.fields.yourCompiteiter2 || "")}
                          </td>
                        )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
}
