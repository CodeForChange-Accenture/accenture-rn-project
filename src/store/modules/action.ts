import { IBank } from "../../interfaces"

export function AddAccountInfos(banco: IBank){
    return{
        type: "ADD_ACCOUNT_INFO",
        payload:{
            banco
        }
    }
}

export function LoadAccountPlans(plan: IBank){
    return{
        type: "LOAD_ACCOUNT_PLANS",
        payload:{
            plan
        }
    }
}

export function ReloadAccountAdd(saldoAdd:number){
    return{
        type: "RELOAD_ACCOUNT_INFO_ADD",
        payload:{
            saldoAdd
        }
    }
}

export function ReloadAccountRemove(saldoRemove:number){
    return{
        type: "RELOAD_ACCOUNT_INFO_REMOVE",
        payload:{
            saldoRemove
        }
    }
}

export function ReloadAccountCredit(saldoCredit:number){
    return{
        type: "RELOAD_ACCOUNT_CREDIT",
        payload:{
            saldoCredit
        }
    }
}