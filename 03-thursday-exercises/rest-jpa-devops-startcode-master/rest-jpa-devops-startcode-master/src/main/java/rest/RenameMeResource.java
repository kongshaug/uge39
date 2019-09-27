package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.RenameMe;
import utils.EMF_Creator;
import facades.FacadeExample;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

//Todo Remove or change relevant parts before ACTUAL use
@Path("xxx")
public class RenameMeResource {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/startcode",
                "dev",
                "ax2",
                EMF_Creator.Strategy.CREATE);
    private static final FacadeExample FACADE =  FacadeExample.getFacadeExample(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
            
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String demo() {
        String ans = "[{\"name\":\"Peter bPan\"}]";
        return ans;
        
    }
    
    //request fra anden origin giver: Access to fetch at 'http://localhost:8080/jpareststarter/api/xxx/' from origin 'http://localhost:3456' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
//   @GET
//   @Produces(MediaType.APPLICATION_JSON)
//   public Response getPersons() {
//       TODO return proper representation object
//       return Response.ok()
//               .header("Access-Control-Allow-Origin", "*")
//               .header("Access-Control-Allow-Credentials", "true")
//               .header("Access-Control-Allow-Headers","origin, content-type, accept, authorization")
//               .header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS, HEAD")
//               .entity("{\"name\":\"Peter Pan\"}").build();
//   }

 //
//Test the API, using POSTMAN. This should not cause any CORS-related problems, WHY?
//ANS = fordi det er den samme origin 
}
