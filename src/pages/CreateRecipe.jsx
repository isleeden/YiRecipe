import React, { useState } from "react";
import Layout from "layouts/Layout";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import ManyValuesInput from "components/ManyValuesInput/ManyValuesInput";
import "styles/pages/CreateRecipe.scss";

export default function CreateRecipe() {
  const [formState, setFormState] = useState({
    ingredients: [],
    steps: [],
  });

  const onIngredientsSubmit = (inputState) => {
    setFormState({
      ...formState,
      ingredients: [...formState.ingredients, inputState],
    });
  };

  const onStepsSubmit = (inputState) => {
    setFormState({
      ...formState,
      steps: [...formState.steps, inputState],
    });
  };

  return (
    <Layout>
      <div className="container">
        <div className="create-recipe__form">
          <form>
            <label>
              <span>Title</span>
              <Input></Input>
            </label>
            <label>
              <span>Description</span>
              <Input></Input>
            </label>
          </form>
          <ManyValuesInput
            className="many-values"
            label="Ingredients"
            btnText="Add Ingridient"
            valuesState={formState.ingredients}
            callback={onIngredientsSubmit}
          />
          <ManyValuesInput
            className="many-values"
            label="Steps"
            btnText="Add Step"
            valuesState={formState.steps}
            callback={onStepsSubmit}
          />
          <Button className="btn-submit">Create New Recipe</Button>
        </div>
      </div>
    </Layout>
  );
}
