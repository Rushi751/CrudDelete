import { useContext } from 'react';
// import { useNavigate } from 'react-router';
import Context from '../Context';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';

 
const StudentList = ({ data }) => {
    const ContextData = useContext(Context);
  
    const handleDelete = (stud) => {
      if (data && Array.isArray(data) && data.length > 0) {
        ContextData.setStudents(
          ContextData.students.filter((e) => stud.id !== e.id)
        );
      }
    };
  
    return (
      <>
        <div className="App">
          <Card sx={{ width: "310px", marginBottom: "20px" }}>
            {data &&
              Array.isArray(data) &&
              data.map((stud) => (
                <CardHeader
                  key={stud.id} // Add a unique key for each CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="id">
                      {stud.id}
                    </Avatar>
                  }
                />
              ))}
  
            <Button
              variant="contained"
              onClick={() => handleDelete(data && data[0])}
            >
              Delete
            </Button>
          </Card>
        </div>
      </>
    );
  };
  
  export default StudentList;
  