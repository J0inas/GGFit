
import React from "react";
import Stack from "@mui/system/Stack";
import {TextField} from "@mui/material";

// 1. Page zur Registrierung
function Page1(): React.JSX.Element{
    return (
        <div>
            <Stack>
                <Stack padding={2}>
                    <h3>
                        Wie heißt du?
                    </h3>
                    <Stack direction="row" gap={3}>
                        <TextField
                            required
                            id="vorname"
                            label="Vorname"
                            margin={"normal"}
                        />
                        <TextField
                            required
                            id="vorname"
                            label="Nachname"
                            margin={"normal"}
                        />
                    </Stack>

                </Stack>
                <Stack padding={2}>
                    <h3>
                        Wie lautet deine E-Mailadresse?
                    </h3>
                    <TextField
                        required
                        id="mail"
                        label="E-Mail"
                        margin={"normal"}
                    />
                </Stack>
                <Stack  padding={2}>
                    <h4>
                        Bestätigung der Mailadresse:
                    </h4>
                    <TextField
                        required
                        id="mail-bestätigung"
                        label="E-Mail"
                        margin={"normal"}
                    />
                </Stack>
            </Stack>
        </div>
    )
}