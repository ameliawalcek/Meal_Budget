import React from 'react'
import { observer, inject } from 'mobx-react'

const RecipeInstructions = inject('recipeStore')(observer((props) => {
    const { recipeInstructions } = props.recipeStore
    console.log(recipeInstructions[0].steps)
    return (
        <>
            <h5>Instructions</h5>
            {recipeInstructions[0].steps &&
                recipeInstructions[0].steps.map(s => {
                    return (
                        <div key={s.number}>
                            {s.number}. {s.step}
                        </div>
                    )
                })
            }
        </>
    )
}))

export default RecipeInstructions