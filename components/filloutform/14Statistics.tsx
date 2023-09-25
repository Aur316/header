import React, { useState } from "react";
import { Input, Radio, Checkbox } from "antd";

const Statistics: React.FC<{
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  gender: string | null;
  setGender: React.Dispatch<React.SetStateAction<string | null>>;
  consumedSubstances: string;
  setConsumedSubstances: React.Dispatch<React.SetStateAction<string>>;
  regularDrugUse: string;
  setRegularDrugUse: React.Dispatch<React.SetStateAction<string>>;
  harmReductionMeasures: string[];
  setHarmReductionMeasures: React.Dispatch<React.SetStateAction<string[]>>;
  relationshipWithDrugs: string;
  setRelationshipWithDrugs: React.Dispatch<React.SetStateAction<string>>;
  changeInDrugUsage: string;
  setChangeInDrugUsage: React.Dispatch<React.SetStateAction<string>>;
  missingServiceForHarmReduction: string;
  setMissingServiceForHarmReduction: React.Dispatch<
    React.SetStateAction<string>
  >;
  willingToPayForTesting: string;
  setWillingToPayForTesting: React.Dispatch<React.SetStateAction<string>>;
}> = ({
  age,
  setAge,
  gender,
  setGender,
  consumedSubstances,
  setConsumedSubstances,
  regularDrugUse,
  setRegularDrugUse,
  harmReductionMeasures,
  setHarmReductionMeasures,
  relationshipWithDrugs,
  setRelationshipWithDrugs,
  changeInDrugUsage,
  setChangeInDrugUsage,
  missingServiceForHarmReduction,
  setMissingServiceForHarmReduction,
  willingToPayForTesting,
  setWillingToPayForTesting,
}) => {
  return (
    <div>
      <div>
        <br />
        <p className="mb-4 white">How old are you? (e.g. 21)</p>
        <Input
          placeholder=""
          className="mb-4 text-black"
          style={{ width: "60%", textAlign: "center" }}
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </div>
      <div>
        <br />
        <p className="mb-4 white">What is your gender?</p>
        <Radio.Group
          buttonStyle="solid"
          className="mb-4"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        >
          <Radio value="Male" style={{ marginRight: 16, color: "white" }}>
            Male
          </Radio>
          <Radio value="Female" style={{ color: "white" }}>
            Female
          </Radio>
          <Radio
            value="Transgender"
            style={{ marginRight: 16, color: "white" }}
          >
            Transgender
          </Radio>
          <Radio value="Non-binary" style={{ color: "white" }}>
            Non-binary
          </Radio>
          <Radio value="Other" style={{ color: "white" }}>
            Other
          </Radio>
        </Radio.Group>
      </div>
      <div>
        <br />
        <p className="mb-4 white">
          What psychoactive substances have you consumed so far in life?
        </p>
        <Input
          placeholder=""
          className="mb-4 text-black"
          style={{ width: "60%", textAlign: "center" }}
          onChange={(e) => setConsumedSubstances(e.target.value)}
          value={consumedSubstances}
        />
      </div>
      <div>
        <br />
        <p className="mb-4 white">
          Do you consume any drugs regularly? If so, which and how often (e.g.
          mushrooms every 2 weeks, weed every day)
        </p>
        <Input
          placeholder=""
          className="mb-4 text-black"
          style={{ width: "60%", textAlign: "center" }}
          onChange={(e) => setRegularDrugUse(e.target.value)}
          value={regularDrugUse}
        />
        <p className="mb-4 white">
          What harm reduction measures do you commonly use?
        </p>
        <Checkbox.Group
          style={{ width: "100%" }}
          className="mb-4 text-white"
          onChange={(checkedValues) =>
            setHarmReductionMeasures(checkedValues as string[])
          }
          value={harmReductionMeasures}
        >
          <Checkbox
            value="Drug checking (sending to a lab)"
            style={{ display: "block", color: "white" }}
          >
            Drug checking (sending to a lab)
          </Checkbox>
          <Checkbox
            value="Drug checking (TLC)"
            style={{ display: "block", color: "white" }}
          >
            Drug checking (TLC)
          </Checkbox>
          <Checkbox
            value="Drug checking (reagents)"
            style={{ display: "block", color: "white" }}
          >
            Drug checking (reagents)
          </Checkbox>
          <Checkbox
            value="Not sharing sniffing instruments with others"
            style={{ display: "block", color: "white" }}
          >
            Not sharing sniffing instruments with others
          </Checkbox>
          <Checkbox
            value="Not sharing needles with others"
            style={{ display: "block", color: "white" }}
          >
            Not sharing needles with others
          </Checkbox>
          <Checkbox
            value="Taking a small test dose when using a substance or batch for the first time"
            style={{ display: "block", color: "white" }}
          >
            Taking a small test dose when using a substance or batch for the
            first time
          </Checkbox>
          <Checkbox
            value="Having a trip sitter"
            style={{ display: "block", color: "white" }}
          >
            Having a trip sitter
          </Checkbox>
          <Checkbox
            value="Taking care of set and setting"
            style={{ display: "block", color: "white" }}
          >
            Taking care of set and setting
          </Checkbox>
          <Checkbox
            value="Taking supplements to help recovery or reduce negative side-effects"
            style={{ display: "block", color: "white" }}
          >
            Taking supplements to help recovery or reduce negative side-effects
          </Checkbox>
          <Checkbox
            value="Asking questions in psychonaut wiki telegram group"
            style={{ display: "block", color: "white" }}
          >
            Asking questions in psychonaut wiki telegram group
          </Checkbox>
          <Checkbox
            value="Reading about the substance online in other websites"
            style={{ display: "block", color: "white" }}
          >
            Reading about the substance online in other websites
          </Checkbox>
          <Checkbox value="Other" style={{ display: "block", color: "white" }}>
            Other
          </Checkbox>
        </Checkbox.Group>
        <br />
        <p className="mb-4 white">
          Do you feel you have a healthy relationship with drugs?
        </p>
        <Radio.Group
          buttonStyle="solid"
          className="mb-4"
          onChange={(e) => setRelationshipWithDrugs(e.target.value)}
          value={relationshipWithDrugs}
        >
          <Radio value="yes" style={{ marginRight: 16, color: "white" }}>
            Yes
          </Radio>
          <Radio value="more or less" style={{ color: "white" }}>
            More or less
          </Radio>
          <Radio value="no" style={{ marginRight: 16, color: "white" }}>
            No
          </Radio>
          <Radio value="No but trying to improve" style={{ color: "white" }}>
            No but trying to improve
          </Radio>
        </Radio.Group>
      </div>
      <br />
      <p className="mb-4 white">
        Is there anything you want to change regarding your drug usage?
      </p>
      <Input
        placeholder=""
        className="mb-4 text-black"
        style={{ width: "60%", textAlign: "center" }}
        onChange={(e) => setChangeInDrugUsage(e.target.value)}
        value={changeInDrugUsage}
      />
      <br />
      <p className="mb-4 white">
        Is there any service or tool that feel is missing for harm reduction
        worldwide?
      </p>
      <Input
        placeholder=""
        className="mb-4 text-black"
        style={{ width: "60%", textAlign: "center" }}
        onChange={(e) => setMissingServiceForHarmReduction(e.target.value)}
        value={missingServiceForHarmReduction}
      />
      <br />
      <p className="mb-4 white">
        Last question: How much would you be willing to pay, if anything, for
        testing samples if this wasn´t a free service? (e.g. 20e)
      </p>
      <Input
        placeholder=""
        className="mb-4 text-black"
        style={{ width: "60%", textAlign: "center" }}
        onChange={(e) => setWillingToPayForTesting(e.target.value)}
        value={willingToPayForTesting}
      />
    </div>
  );
};

export default Statistics;
