import express from "express"
import { addBook,listBook,removeBook} from "../controllers/bookController.js"
import multer from "multer"  // image storage system

const bookRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        // Date.now() - to name every file uniquely
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

bookRouter.post("/add",upload.single("image"),addBook)
bookRouter.get("/list",listBook)
bookRouter.post("/remove",removeBook);




export default bookRouter;