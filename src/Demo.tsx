import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData() {
  return {
    paradeStateCode: "Yet to In-Pro",
    paradeStateCodeTxnId: "yetToInpro",
    "90001": "583",
    "90002": "483",
    "90003": "100",
    paradeStateCodeList: [
      {
        paradeStateCode: "Yet to In-Pro",
        paradeStateCodeTxnId: 3,
        "90001": "583",
        "90002": "483",
        "90003": "100"
      }
    ]
  };
}

const columns = [
  { title: "", field: "paradeStateCode" },
  { title: "Unit 1", field: "unit" },
  { title: "COY A", field: "90001" },
  { title: "COY B", field: "90002" }
];

function Row(props: { row: any }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        style={{ backgroundColor: "gray" }}
      >
        <TableCell>{row.paradeStateCode}</TableCell>
        {row.subUnit1List.map((item) => (
          <TableCell align="right">{item.count}</TableCell>
        ))}
      </TableRow>
      {row.paradeStates.map((historyRow) => (
        <TableRow>
          <TableCell>{historyRow.paradeStateCode}</TableCell>
          {historyRow.subUnit1List.map((item) => (
            <TableCell align="right">{item.count}</TableCell>
          ))}
        </TableRow>
      ))}
    </React.Fragment>
  );
}

const rows = [
  {
    paradeStateCode: "Yet to In-Pro",
    paradeStateCodeTxnId: "yetToInpro",
    subUnit1List: [
      {
        subUnit1Id: "unit",
        count: 583
      },
      {
        subUnit1Id: "90002",
        count: 483
      },
      {
        subUnit1Id: "0",
        count: 100
      }
    ],
    paradeStates: [
      {
        paradeStateCode: "Yet to In-Pro",
        paradeStateCodeTxnId: 3,
        subUnit1List: [
          {
            subUnit1Id: "unit",
            count: 583
          },
          {
            subUnit1Id: "90001",
            count: 483
          },
          {
            subUnit1Id: "0",
            count: 100
          }
        ]
      }
    ]
  },
  {
    paradeStateCode: "Total In-Pro",
    paradeStateCodeTxnId: "inPro",
    subUnit1List: [
      {
        subUnit1Id: "unit",
        count: 25
      },
      {
        subUnit1Id: "90001",
        count: 0
      },
      {
        subUnit1Id: "90002",
        count: 25
      }
    ],
    paradeStates: [
      {
        paradeStateCode: "Present",
        paradeStateCodeTxnId: 1,
        subUnit1List: [
          {
            subUnit1Id: "unit",
            count: 7
          },
          {
            subUnit1Id: "90001",
            count: 0
          },
          {
            subUnit1Id: "90002",
            count: 7
          }
        ]
      },
      {
        paradeStateCode: "Present (Light duties)",
        paradeStateCodeTxnId: 2,
        subUnit1List: [
          {
            subUnit1Id: "unit",
            count: 1
          },
          {
            subUnit1Id: "90001",
            count: 0
          },
          {
            subUnit1Id: "90002",
            count: 1
          }
        ]
      },
      {
        paradeStateCode: "Booked Out",
        paradeStateCodeTxnId: 9,
        subUnit1List: [
          {
            subUnit1Id: "unit",
            count: 1
          },
          {
            subUnit1Id: "90001",
            count: 0
          },
          {
            subUnit1Id: "90002",
            count: 1
          }
        ]
      },
      {
        paradeStateCode: "MC",
        paradeStateCodeTxnId: 4,
        subUnit1List: [
          {
            subUnit1Id: "unit",
            count: 1
          },
          {
            subUnit1Id: "90001",
            count: 0
          },
          {
            subUnit1Id: "90002",
            count: 1
          }
        ]
      },
      {
        paradeStateCode: "Off-Pass",
        paradeStateCodeTxnId: 5,
        subUnit1List: [
          {
            subUnit1Id: "unit",
            count: 1
          },
          {
            subUnit1Id: "90001",
            count: 0
          },
          {
            subUnit1Id: "90002",
            count: 1
          }
        ]
      },
      {
        paradeStateCode: "No Pay Leave",
        paradeStateCodeTxnId: 6,
        subUnit1List: [
          {
            subUnit1Id: "unit",
            count: 7
          },
          {
            subUnit1Id: "90001",
            count: 0
          },
          {
            subUnit1Id: "90002",
            count: 7
          }
        ]
      },
      {
        paradeStateCode: "Early Out-Pro",
        paradeStateCodeTxnId: 8,
        subUnit1List: [
          {
            subUnit1Id: "unit",
            count: 7
          },
          {
            subUnit1Id: "90001",
            count: 0
          },
          {
            subUnit1Id: "90002",
            count: 7
          }
        ]
      }
    ]
  },
  {
    paradeStateCode: "Total In-Camp",
    paradeStateCodeTxnId: "inPro",
    subUnit1List: [
      {
        subUnit1Id: "unit",
        count: 25
      },
      {
        subUnit1Id: "90001",
        count: 0
      },
      {
        subUnit1Id: "90002",
        count: 25
      }
    ],
    paradeStates: []
  },

  {
    paradeStateCode: "Deferred",
    paradeStateCodeTxnId: "deferred",
    subUnit1List: [
      {
        subUnit1Id: "unit",
        count: 7
      },
      {
        subUnit1Id: "90001",
        count: 3
      },
      {
        subUnit1Id: "90002",
        count: 4
      }
    ],
    paradeStates: [
      {
        paradeStateCode: "Deferred",
        paradeStateCodeTxnId: 7,
        subUnit1List: [
          {
            subUnit1Id: "unit",
            count: 7
          },
          {
            subUnit1Id: "90001",
            count: 3
          },
          {
            subUnit1Id: "90002",
            count: 4
          }
        ]
      }
    ]
  },
  {
    paradeStateCode: "Total",
    paradeStateCodeTxnId: "total",
    subUnit1List: [
      {
        subUnit1Id: "unit",
        count: 615
      },
      {
        subUnit1Id: "90001",
        count: 486
      },
      {
        subUnit1Id: "90002",
        count: 129
      }
    ],
    paradeStates: []
  }
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell>{column.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.paradeStateCode} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
