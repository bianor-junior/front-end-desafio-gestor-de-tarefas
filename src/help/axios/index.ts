import {signIn} from "@/help/axios/signIn-signUp/useCases/userUseCaseSignIn";
import {signUp} from "@/help/axios/signIn-signUp/useCases/userUseCaseSignUp";
import {getAll} from "@/help/axios/task/useCases/taskUseCasesGetAll";
import {post} from "@/help/axios/task/useCases/taskUseCasePost";
import {put} from "@/help/axios/task/useCases/taskUseCasePut";
import {get} from "@/help/axios/task/useCases/taskUseCaseGet";


export const http = {
  signIn,
  signUp,
  getAll,
  post,
  put,
  get,
}