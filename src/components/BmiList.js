import '../styles/BmiList.css';

export default function BmiList({list}) {
  const headers = ['name', 'age', 'height', 'weight', 'bmi'];
  
  const renderRow = (row) => {
    const columns = ['name', 'age', 'height', 'weight', 'bmi'];
    return (
        columns.map(column => (<div class="row" key={`${row.key}-${column}`}>{row[column]}</div>))
    )
  }
  
  return(
    <div className="bmi-table">
      {headers.map(header => <div key={header} className="header">{header}</div>)}
      {list.map(row => renderRow(row))}
    </div>
  )
}

/* list = 
[{
  name: 'srijan', 
  age: '20', 
  height: '120',
  weight: '200',
  bmi: '',
  key: 123123123123
  }...]
*/