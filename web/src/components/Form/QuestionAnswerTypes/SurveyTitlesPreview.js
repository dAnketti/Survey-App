import React, { useEffect,useState } from "react";
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { getAllSurveyTitleAndId,getfindByIdSurvey,deleteSurvey } from "../../../api/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { responseSurveyUpdate,clearSurveyTemplate } from "../../../redux/surveyActions";
import { ListItem } from "@mui/material";
const SurveyTitlesPreview = () => {
const { survey: tempSurvey } = useSelector((store) => ({
        survey: store.survey,
      })); 
  const [allSurveyTitle, setAllSurveyTitle] = useState([]);
  const dispatch=useDispatch();
  useEffect(() => {
    gellAllSurveyTitle();
  }, [tempSurvey]);

  const gellAllSurveyTitle = async () => {
    try {
      const response = await getAllSurveyTitleAndId();
      setAllSurveyTitle(response.data);
    } catch (e) {
      console.log("error: ", e.data);
    }
  };

  const deleteSurveyClick = async (id) => {
    try {
      await deleteSurvey(id);
      gellAllSurveyTitle();
    } catch (e) {
      console.log("error: ", e.data);
    }
  };
  

  const surveyClickTitle=async(id)=>{
    
    try {
      const response=await getfindByIdSurvey(id);
      dispatch(responseSurveyUpdate(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  const clearTemplateClick = () =>{
    dispatch(clearSurveyTemplate());
  }
  return ( 
    <div className="card mt-2 mb-2">                
        <div className="card-body"> 
         <div >                      
          <span className="material-icons float-end"  style={{ cursor: "pointer" }} onClick={clearTemplateClick}>add_circle</span>          
        </div> 
       <div className="float-start">            
            <h6 className="card-title">Survey Templates</h6>
       </div>                     
       </div>     
          
        {allSurveyTitle.length>0 &&
        allSurveyTitle.map((survey,i)=>{
            const {title,id}=survey;
            return(
              <div className="row">
                <div className="col-md-10">
                <ListItemButton  onClick={() => surveyClickTitle(id)}>                    
                    <span className="material-icons me-2">dynamic_form</span>                    
                    <ListItemText primary={title} />                                                                              
                </ListItemButton>
                </div><div className="col-md-1 m-auto">
                <span className="material-icons float-end"
                style={{ cursor: "pointer" }}  
                onClick={(e) => deleteSurveyClick(id)} >delete</span>
                </div>
                </div>
            )
        }

        )
        }
       
      
    </div>
  );
};

export default SurveyTitlesPreview;
