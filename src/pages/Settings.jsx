import Heading from "../ui/Heading";
import Row from "../ui/Row";

import UpdateSettingForm from "../features/settings/UpdateSettingsForm";

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>

      <UpdateSettingForm></UpdateSettingForm>
    </Row>
  );
}

export default Settings;
