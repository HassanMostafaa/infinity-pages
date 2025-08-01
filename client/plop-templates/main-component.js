import React, { type FunctionComponent } from 'react';


export type I{{ properCase name }} = Omit<IGen{{ properCase name }},"__typename" | "id"> & {}

export const {{ properCase name }}: FunctionComponent<I{{ properCase name }}> = ({}) => {
  return (
    <div>{{properCase name}}</div>
  )
}