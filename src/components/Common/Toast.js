import React,{useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// create a common Toast re-usaable component which can be called form anywhere as follows:
//  Toast('hello')
// expected behavior: toast hello for few seconds and then disappear


function getSeverity(severity){
    switch(severity){
        case 0:
            return "error";
        case 1:
            return "warning";
        case 2:
            return "info";
        case 3:
            return "success";
        default:
            return "success";
    }
}


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


const Toast = ({message='',severity})=>{

    const [openToast, setOpenToast] = useState(true);
    const severityToast = getSeverity(severity)
const onCloseToast = ()=>{
    setOpenToast(false)
}

    return (
 <Snackbar
open={openToast}
autoHideDuration={3000}
// message={message}
anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
}}
onClose={onCloseToast}
 >
     <Alert  severity={severityToast} onClose={onCloseToast}>
         {message}
    </Alert>
 </Snackbar>
    )
}

export default Toast;
