import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./config";

const Edit = () => {
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()
}