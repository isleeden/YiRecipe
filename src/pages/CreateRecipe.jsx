import React, { useState } from "react";
import { useFormik } from "formik";
import Layout from "layouts/Layout";
import Button from "components/Button/Button";
import ManyValues from "components/ManyValues/ManyValues";
import Textarea from "components/Textarea/Textarea";
import Input from "components/Input/Input";
import LabelWithError from "components/LabelWithError/LabelWithError";
import "styles/pages/CreateRecipe.scss";
import RecipeService from "api/RecipeService";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 64) {
    errors.title = "Must be 64 characters or less";
  }

  if (!values.body) {
    errors.body = "Required";
  } else if (values.body.length > 256) {
    errors.body = "Must be 256 characters or less";
  }

  return errors;
};

const validateIngredient = (values) => {
  const errors = {};

  if (values.ingredient.length > 72) {
    errors.ingredient = "Must be 72 characters or less";
  }

  if (!values.ingredient) {
    errors.ingredient = "Must be 72 characters or less";
  }

  return errors;
};

const validateStep = (values) => {
  const errors = {};

  if (values.step.length > 128) {
    errors.step = "Must be 128 characters or less";
  }

  if (!values.step) {
    errors.step = "Required";
  }

  return errors;
};

const validateTag = (values) => {
  const errors = {};

  if (values.tag.length > 32) {
    errors.tag = "Must be 32 characters or less";
  }

  if (!values.tag) {
    errors.tag = "Required";
  }

  return errors;
};

export default function CreateRecipe() {
  const [formIngredient, setFormIngredient] = useState({
    ingredients: [],
    error: "",
  });

  const [formStep, setFormStep] = useState({
    steps: [],
    error: "",
  });

  const [formTag, setFormTag] = useState({
    tags: [],
    error: "",
  });

  const ingredientFormik = useFormik({
    initialValues: {
      ingredient: "",
    },
    validate: validateIngredient,
    onSubmit: (values) => {
      setFormIngredient({
        ...formIngredient,
        ingredients: [...formIngredient.ingredients, values.ingredient],
      });
      ingredientFormik.resetForm();
    },
  });

  const stepFormik = useFormik({
    initialValues: {
      step: "",
    },
    validate: validateStep,
    onSubmit: (values) => {
      setFormStep({
        ...formStep,
        steps: [...formStep.steps, values.step],
      });
      stepFormik.resetForm();
    },
  });

  const tagFormik = useFormik({
    initialValues: {
      tag: "",
    },
    validate: validateTag,
    onSubmit: (values) => {
      setFormTag({
        ...formTag,
        tags: [...formTag.tags, values.tag],
      });
      tagFormik.resetForm();
    },
  });

  const createRecipe = async (values) => {
    try {
      if (formIngredient.ingredients.length === 0) {
        setFormIngredient({ ...formIngredient, error: "Required" });
      }
      if (formStep.steps.length === 0) {
        setFormStep({ ...formStep, error: "Required" });
      }
      await RecipeService.createRecipe({
        title: values.title,
        body: values.body,
        ingredients: formIngredient.ingredients,
        directions: formStep.steps,
        tags: formTag.tags,
      });
    } catch {
      alert("something went wrong");
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validate,
    onSubmit: createRecipe,
  });

  return (
    <Layout>
      <div className="container">
        <div className="create-recipe__form">
          <form onSubmit={formik.handleSubmit}>
            <LabelWithError label="Title" error={formik.errors.title}>
              <Input
                value={formik.values.title}
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </LabelWithError>
            <LabelWithError label="Description" error={formik.errors.body}>
              <Textarea
                value={formik.values.body}
                name="body"
                rows="4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </LabelWithError>
          </form>
          <ManyValues
            className="many-values"
            label="Ingredients"
            btnText="Add Ingridient"
            name="ingredient"
            rows="1"
            onChange={ingredientFormik.handleChange}
            value={ingredientFormik.values.ingredient}
            values={formIngredient.ingredients}
            error={ingredientFormik.errors.ingredient}
            valuesError={formIngredient.error}
            onSubmit={ingredientFormik.handleSubmit}
            onBlur={ingredientFormik.handleBlur}
          />
          <ManyValues
            className="many-values"
            label="Steps"
            btnText="Add Step"
            name="step"
            rows="2"
            onChange={stepFormik.handleChange}
            value={stepFormik.values.step}
            values={formStep.steps}
            error={stepFormik.errors.step}
            valuesError={formStep.error}
            onSubmit={stepFormik.handleSubmit}
            onBlur={stepFormik.handleBlur}
          />
          <ManyValues
            className="many-tags"
            label="Tags"
            btnText="Add Tag"
            name="tag"
            rows="1"
            onChange={tagFormik.handleChange}
            value={tagFormik.values.tag}
            values={formTag.tags}
            error={tagFormik.errors.tag}
            valuesError={formTag.error}
            onSubmit={tagFormik.handleSubmit}
            onBlur={tagFormik.handleBlur}
          />
          <Button
            type="submit"
            className="btn-submit"
            onClick={formik.handleSubmit}
          >
            Create New Recipe
          </Button>
        </div>
      </div>
    </Layout>
  );
}
