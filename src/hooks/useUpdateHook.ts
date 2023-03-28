import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResumeData } from "../redux/actions";

export const useUpdate = (): any => {
  const dispatch = useDispatch();
  const getData = useSelector((state: any) => state.resumeData);
  const [data, setData] = useState(getData);

  useEffect(() => {
    dispatch(updateResumeData(data));
  }, [dispatch, data]);

  return [data,setData];
}
