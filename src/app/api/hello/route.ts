import { json } from "stream/consumers";

export async function GET(){
    return new Response(JSON.stringify({ message : "Welcome to NEXT js"}));
}